/* eslint-disable react/prop-types */

import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { AiOutlineFullscreen } from "react-icons/ai";
import ProductDetails from "../productDetails/ProductDetails";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APIpostData, getData } from "../../util/api";
import { MyContext } from "../../App";
import { IoIosHeart } from "react-icons/io";
import {motion} from "framer-motion"




const Product = ({ item, itemView }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const ViewProductDetails = (id) => {
    setSelectedProductId(id);
    setisOpenProductModal(true);
  };
  const closeProductModal = () => {
    setisOpenProductModal(false);
  };

  useEffect(() => {
    getWishlist();
  },[]);

  const getWishlist = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    try {
      const res = await getData(`/wishlist/user/${user.userId}`);

      // ✅ Because res is array
      const productIds = res.map((item) => item.productId);

      setWishlistItems(productIds);
    } catch (error) {
      console.error("Failed to load wishlist", error);
    }
  };

  const handleViewdetail = () => {
    navigate(`/product/${item.id}`); // ✅ បង្ហាញនៅ Console
  };
  const addToWishlist = async (item) => {
    const user = JSON.parse(localStorage.getItem("user"));
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await APIpostData("/wishlist/create", {
        productTitle: item.name,
        image: item.images,
        rating: item.rating,
        price: item.price,
        productId: item.id,
        userId: user?.userId, 
      });

      setWishlistItems((prev) => [...prev, item.id]);
      context.setMessage({
        open: true,
        type: "success",
        text: "product add to your wishlist.!",
      });
      getWishlist()
    } catch (error) {
      if (error.status == 401) {
        context.setMessage({
          open: true,
          type: "error",
          text: "Don't have an account please sign up ",
        });
      }
    }
  };

  return (
    <>
      <motion.div
      initial={{opacity:0,translateY:"50%"}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:2}}
      className={`productItem ${itemView}`}>
        <div className="imgWrapper">
          <img src={item.images} alt={item.name} className="w-100" />

          <span className="badge ">28%</span>
          <div className="actions">
            <Button onClick={() => ViewProductDetails(item.id)}>
              <AiOutlineFullscreen />
            </Button>
            <Button onClick={()=>addToWishlist(item)} className={wishlistItems.includes(item.id) ? "active-wishlist" : ""}>
              {
                wishlistItems.includes(item.id) ? <><IoIosHeart color="red" /></>:<><IoIosHeart /></>
              }
             
            </Button>

            
          </div>
        </div>
        <div className="title">
          <Rating name="read-only" value={item.rating} readOnly />
          <div className="text-des">
            <h4 onClick={handleViewdetail}>
              {item.name.length > 25
                ? item.name.substr(0, 25) + "..."
                : item.name}
            </h4>
            <p>
              {item.description.length > 35
                ? item.description.substr(0, 35) + "..."
                : item.description}
            </p>
          </div>
          <span className="text-success ">
            {item.countInStock && item.countInStock > 0 ? (
              "In Stock"
            ) : (
              <>
                <span className="outStock">Out of Stock</span>
              </>
            )}
          </span>
          <div className="pro-price">
            <p className="orprice">${item.oldPrice}</p>
            <p className="Disprice">${item.price}</p>
          </div>
          {/* <Button className="addtocard">Add to card</Button> */}
        </div>
      </motion.div>
      {isOpenProductModal === true && (
        <ProductDetails
          closeProductModal={closeProductModal}
          productId={selectedProductId}
        />
      )}
    </>
  );
};

export default Product;
