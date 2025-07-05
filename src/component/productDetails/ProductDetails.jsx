
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IoMdClose } from "react-icons/io";
import Rating from "@mui/material/Rating";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

import { FaCheck } from "react-icons/fa6";
import QuantityBox from "../QuantityBox/QuantityBox";
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from "react-icons/io5";
import ProductZoom from "../productzoom/ProductZoom";

const ProductDetails = (props) => {
 
  return (
    <Dialog
      open={true}
      onClose={() => props.closeProductModal()}
      className="productModal"
    >
      <div className="product-quick">
        <div className="product-quick-header">
          <h4 className="mb-0">All Natural Italian-Style Chicken Meatballs</h4>
          <div className="d-flex align-items-center mt-1">
            <div className="d-flex brands align-items-center   px-3 py-1">
              <span>Brands :</span>
              <span className="ms-1">
                <b>Welch's</b>
              </span>
            </div>
            <div className="d-flex rating align-items-center px-3 py-2">
              <Rating name="read-only" value={5} readOnly size="small" />
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
           <ProductZoom/>
          </div>
          <div className="col-md-7 details">
            <div className="details-info align-items-center">
              <div className="price">
                <span className="oldPrice">$9.35</span>
                <span className="netPrice">$7.25</span>
              </div>
              <div className="product-meta">
                <span className="stock in-stock">In Stock</span>
              </div>
              <div className="product-short-desc">
                <p>
                  Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                  luctus malesuada tincidunt. Class aptent taciti sociosqu ad
                  litora torquent
                </p>
              </div>
              <div className="product-actions">
                <QuantityBox />
                <Button className="btn-big btn-addToCard">add to card</Button>
              </div>

              <div className="d-flex align-item-center mt-5 gap-2">
                <Button className="btn-wishlist">
                  <CiHeart /> &nbsp; add to Wishlist{" "}
                </Button>
                <Button className="btn-wishlist">
                  <IoGitCompareOutline /> &nbsp; compare{" "}
                </Button>
              </div>
              <div className="product-checklist">
                <ul>
                  <li>
                    <FaCheck /> &nbsp;Type: Organic
                  </li>
                  <li>
                    <FaCheck /> &nbsp;MFG: Jun 4.2021
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
