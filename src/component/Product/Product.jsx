
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { AiOutlineFullscreen } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import ProductDetails from "../productDetails/ProductDetails";
import { useState } from "react";
const Product = ({item, itemView}) => {
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const ViewProductDetails = (id) => {
    setSelectedProductId(id)
    setisOpenProductModal(true);
    
  };
  const closeProductModal = () => {
    setisOpenProductModal(false);
  };
  // console.log("data:",props.data)
  return (
    <>
    <div>
      {/* {props.product.map((item,index)=>(
        <div key={index}></div>
      ))} */}


      <div className={`item productItem ${itemView}`}>
        <div className="imgWrapper">
          <img
             src={item.file}
            alt={item.name}
            className="w-100"
          />

          <span className="badge ">28%</span>
          <div className="actions">
            <Button onClick={() => ViewProductDetails(item.id)}>
              <AiOutlineFullscreen />
            </Button>
            <Button>
              <CiHeart />
            </Button>
          </div>
        </div>
        <div className="title">
          <Rating name="read-only" value={item.rating} readOnly />
          <div className="text-des">
            <h4>{item.name}</h4>
            <p>description</p>
          </div>
          <span className="text-success ">
            {item.stock && item.stock > 0 ? "In Stock" : <><span className="outStock">Out of Stock</span></>}
            
           
          </span>
          <div className="pro-price">
            <p className="orprice">${item.oldPrice}</p>
            <p className="Disprice">${item.price}</p>
          </div>
          <Button className="addtocard">Add to card</Button>
        </div>
      </div>
    </div>
      {isOpenProductModal === true && (
        <ProductDetails closeProductModal={closeProductModal} productId={selectedProductId}/>
      )}
    </>
  );
};

export default Product;
