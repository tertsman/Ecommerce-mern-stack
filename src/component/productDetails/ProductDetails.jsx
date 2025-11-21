/* eslint-disable react/prop-types */

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoMdClose } from "react-icons/io";
import Rating from "@mui/material/Rating";
import { FaShoppingCart } from "react-icons/fa";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import CircularProgress from "@mui/material/CircularProgress";

import { FaCheck } from "react-icons/fa6";
import QuantityBox from "../QuantityBox/QuantityBox";
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from "react-icons/io5";
import ProductZoom from "../productzoom/ProductZoom";
import { useContext, useEffect, useState } from "react";
import { APIpostData, getData } from "../../util/api";
import dayjs from "dayjs"
import { MyContext } from "../../App";
const ProductDetails = (props) => {

const [productQuantity, setProductQuantity] = useState();
     const context = useContext(MyContext)
    const [product,setProduct] = useState([])
  
  
    useEffect(()=>{
      if (props.productId) {
            getData(`/product/${props.productId}`)
              .then((data) => {
                setProduct(data);
               
              })
              .catch(() => {
                console.log("False")

              });
          }
          
    },[props.productId])
      const rating = Number( product?.rating);


      const quantity = (val) => {
    setProductQuantity(val);
  };
    const addToCart = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      context.setMessage({
        open: true,
        type: "warning",
        text: "Please login before adding to cart",
      });
      return;
    }

    const cartFields = {
      productTitle: product?.name,
      image: product?.images?.[0],
      rating: product?.rating,
      quantity: productQuantity,
      price: product?.price,
      subTotal: parseInt(product?.price * productQuantity),
      productId: product?._id,
      _id: user._id,
    };

    context.addToCart(cartFields);
  };


  const addToWishlist = async(product) =>{
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    try {
      const res = await APIpostData('/wishlist/create',{
        productTitle: product.name,
        image: product?.images?.[0],
        rating: product.rating,
        price: product.price,
        productId: product.id,
        _id: user?._id, // អ្នកត្រូវមាន user login រួច
      })
  
      console.log("wishlist",res)
      context.setMessage({
          open: true,
          type: "success",
          text: "product add to your wishlist.!",
        });
    } catch (error) {
      if(error.status== 401){
          context.setMessage({
            open: true,
            type: "error",
            text: "Don't have an account please sign up ",
          });
        }
    }
  }
 
  return (
    <Dialog
      open={true}
      onClose={() => props.closeProductModal()}
      className="productModal"
    >
      <div className="product-quick">
        <div className="product-quick-header">
          <h4 className="mb-0">{product.name}</h4>
          <div className="d-flex align-items-center mt-1">
            <div className="d-flex brands align-items-center   px-3 py-1">
              <span>Brands :</span>
              <span className="ms-1">
                <b>{product.brand}</b>
              </span>
            </div>
            <div className="d-flex rating align-items-center px-3 py-2">
              <Rating name="read-only" value={rating} readOnly  size="small" />
              <p className="mb-0">1review</p>
            </div>
            <div className="d-flex sku align-items-center px-3 py-2">
              <p className="mb-0">SKU: ZU49VOR</p>
            </div>
          </div>
          <Button className="close_" onClick={() => props.closeProductModal()}>
            <IoMdClose />
          </Button>
        </div>

        <div className="quick-body row">
          <div className="col-md-5">
           <ProductZoom data={product}/>
          </div>
          <div className="col-md-7 details">
            <div className="details-info align-items-center">
              <div className="price">
                <span className="oldPrice">{product.oldPrice}</span>
                <span className="netPrice">{product.price}</span>
              </div>
              <div className="product-meta">
                <span className="stock in-stock">{product.countInStock && product.countInStock > 0 ? "In Stock" : <><span className="outStock">Out of Stock</span></>}</span>
              </div>
              <div className="product-short-desc">
                <p>
                  {product.description}
                </p>
              </div>
              <div className="product-actions">
                <QuantityBox  quantity={quantity} />
                <Button className="btn-big btn-addToCard" onClick={addToCart}>
                  
                  {context.isLoading ? (
                                        <CircularProgress color="inherit" className="loading" />
                                      ) : (
                                        <>
                                          {" "}
                                          <FaShoppingCart /> &nbsp; add to card
                                        </>
                                      )}
                  
                  </Button>
              </div>

              <div className="d-flex align-item-center mt-5 gap-2">
                <Button className="btn-wishlist" onClick={()=>addToWishlist(product)}>
                  <CiHeart /> &nbsp; add to Wishlist{" "}
                </Button>
                <Button className="btn-wishlist">
                  <IoGitCompareOutline /> &nbsp; compare{" "}
                </Button>
              </div>
              <div className="product-checklist">
                <ul>
                  <li>
                    <FaCheck /> &nbsp;Type: {product.category?.name}
                  </li>
                  <li>
                    <FaCheck /> &nbsp;MFG: {dayjs(product.dateCreated).format('DD-MMM-YY')}
                  </li>
                  <li>
                    <FaCheck /> &nbsp;LIFE: 30 days
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductDetails;
