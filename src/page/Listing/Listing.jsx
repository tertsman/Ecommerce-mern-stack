import Sidebar from "../../component/Sidebar/Sidebar";
import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { HiViewGrid } from "react-icons/hi";
import { CgMenuGridR } from "react-icons/cg";
import { CgMenuGridO } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import Product from "../../component/Product/Product";
import Pagination from "@mui/material/Pagination";
import { getData } from "../../util/api";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFilterAltOff } from "react-icons/md";
import { MdOutlineFilterAlt } from "react-icons/md";
const Listing = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [productView, setProductView] = useState("four");

  const [showFiler,setShowFilter]=useState(false)
  const [openOverlay,setOpenOverlay] = useState(false)


  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { categoryId } = useParams();

  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    try {
      if (!categoryId) return;
      const res = await getData(`/product/category/${categoryId}`);
      if (Array.isArray(res)) {
        const formatted = res.map((item) => ({
          id: item._id,
          images: item.images?.[0], // ✅ Use first image
          name: item.name,
          description: item.description,
          category: item.category?.name || "N/A",
          brand: item.brand,
          oldPrice: item.oldPrice,
          price: item.price,
          countInStock: item.countInStock,
          rating: item.rating,
          isFeatured: item.isFeatured,
          colors: item.colors,
          weights: item.weights,
          sizes: item.sizes,
          // sizes : item.sizes,
        }));
        setProduct(formatted);
        console.log("Formatted by category", formatted);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [categoryId]);

  const filterData= async(categoryId) =>{
      try {
      if (!categoryId) return;
      const res = await getData(`/product/category/${categoryId}`);
      if (Array.isArray(res)) {
        const formatted = res.map((item) => ({
          id: item._id,
          images: item.images?.[0], // ✅ Use first image
          name: item.name,
          description: item.description,
          category: item.category?.name || "N/A",
          brand: item.brand,
          oldPrice: item.oldPrice,
          price: item.price,
          countInStock: item.countInStock,
          rating: item.rating,
          isFeatured: item.isFeatured,
          colors: item.colors,
          weights: item.weights,
          sizes: item.sizes,
          // sizes : item.sizes,
        }));
        setProduct(formatted);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  const onOpenFilter = ()=>{
    setShowFilter(true)
    setOpenOverlay(true)
  }
 const OnCloseFilter = ()=>{
  setShowFilter(false)
    setOpenOverlay(false)
 }
  return (
    <>
      <section className="product_listing_Page">
        <div className="container">
          <div className="productListing row">
            <div className="col-md-3 sideBarFilter">

            <Sidebar filterData= {filterData} />
            </div>
            <div className="col-md-8">

            <div className="content_right">
              <div className="banner-thumbnail">
                <img
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg"
                  alt=""
                  className="w-100 rounded-2"
                />
                <div className="content-main">
                  <h4>Organic Meals Prepared</h4>
                  <h3>
                    Delivery to <strong>Your Home</strong>
                  </h3>
                  <div className="entry-text color-info-dark">
                    Fully prepared &amp; delivered nationwide.
                  </div>
                </div>
              </div>
              <div className="showBy">
                <div className="btnWrapper d-flex">
                  <Button
                    className={productView === "one" ? "act" : ""}
                    onClick={() => setProductView("one")}
                  >
                    <IoIosMenu />
                  </Button>
                  <Button
                    className={productView === "two" ? "act" : ""}
                    onClick={() => setProductView("two")}
                  >
                    <HiViewGrid />
                  </Button>
                  <Button
                    className={productView === "three" ? "act" : ""}
                    onClick={() => setProductView("three")}
                  >
                    <CgMenuGridO />
                  </Button>
                  <Button
                    className={productView === "four" ? "act" : ""}
                    onClick={() => setProductView("four")}
                  >
                    <CgMenuGridR />
                  </Button>
                </div>
                  <div className="openFilter" onClick={onOpenFilter}><MdOutlineFilterAltOff/>Filter</div>
                <div className="showByFilter">
                  <Button onClick={handleClick}>
                    show 9 &nbsp;
                    <FaAngleDown />
                  </Button>
                  <Menu
                    className="showPaper"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>10</MenuItem>
                    <MenuItem onClick={handleClose}>20</MenuItem>
                    <MenuItem onClick={handleClose}>30</MenuItem>
                    <MenuItem onClick={handleClose}>40</MenuItem>
                    <MenuItem onClick={handleClose}>50</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className={`productLit `}>
                {product?.length > 0 &&
                  product.map((item,index) => (
                    
                      <Product key={index} itemView={productView} item={item} />
                    
                  ))}
              </div>
              <div className="d-flex align-items-center justify-content-center mt-3">
                <Pagination count={10} color="primary" />
              </div>
            </div>
            </div>
          </div>
          <div className= {`overlay ${openOverlay !== false ? 'open':''}`} onClick={OnCloseFilter}></div>
          <div className={`mobileFilter ${showFiler !== false ? 'open':''}`}>
            <div className="mobileFilterHead">
              <h2><MdOutlineFilterAlt/> Filter</h2>
              <div className="close-btn" onClick={OnCloseFilter}>
                  <IoMdClose/>
              </div>
            </div>
            <Sidebar filterData= {filterData} close={OnCloseFilter} />
          </div>

        </div>
      </section>
    </>
  );
};

export default Listing;
