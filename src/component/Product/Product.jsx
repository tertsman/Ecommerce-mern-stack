
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { AiOutlineFullscreen } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import ProductDetails from "../productDetails/ProductDetails";
import { useState } from "react";
const Product = (props) => {
  const [isOpenProductModal, setisOpenProductModal] = useState(false);
  const ViewProductDetails = (id) => {
    setisOpenProductModal(true);
  };
  const closeProductModal = () => {
    setisOpenProductModal(false);
  };
  return (
    <>
      <div className={`item productItem ${props.itemView}`}>
        <div className="imgWrapper">
          <img
            src="https://media.premiumtimesng.com/wp-content/files/2021/10/Indomie.png"
            alt=""
            className="w-100"
          />

          <span className="badge ">28%</span>
          <div className="actions">
            <Button onClick={() => ViewProductDetails(1)}>
              <AiOutlineFullscreen />
            </Button>
            <Button>
              <CiHeart />
            </Button>
          </div>
        </div>
        <div className="title">
          <Rating name="read-only" value={5} readOnly />
          <div className="text-des">
            <h4>Angie’s Boomchickapop Sweet & Salty Kettle Corn</h4>
            <p>description</p>
          </div>
          <span className="text-success ">In Stock</span>
          <div className="pro-price">
            <p className="orprice">$128.99</p>
            <p className="Disprice">$100.99</p>
          </div>
          <Button className="addtocard">Add to card</Button>
        </div>
      </div>

      {isOpenProductModal === true && (
        <ProductDetails closeProductModal={closeProductModal} />
      )}
    </>
  );
};

export default Product;
