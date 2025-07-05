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
import Pagination from '@mui/material/Pagination';
const Listing = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [productView,setProductView] = useState('four')
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <section className="product_listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar />

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
                  <Button className={productView === 'one' ? 'act':''} onClick={()=>setProductView('one')}>
                    <IoIosMenu />
                  </Button>
                  <Button className={productView === 'two' ? 'act':''} onClick={()=>setProductView('two')}>
                    <HiViewGrid />
                  </Button>
                  <Button className={productView === 'three' ? 'act':''} onClick={()=>setProductView('three')}>
                    <CgMenuGridO />
                  </Button>
                  <Button className={productView === 'four' ? 'act':''} onClick={()=>setProductView('four')}>
                    <CgMenuGridR />
                  </Button>
                </div>
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

              <div className="productLit">
                    <Product itemView = {productView}/>
                    <Product itemView = {productView}/>
                    <Product itemView = {productView}/>
                    <Product itemView = {productView}/>
                    <Product itemView = {productView}/>
                    <Product itemView = {productView}/>
                    <Product itemView = {productView}/>
                    <Product itemView = {productView}/>
                    <Product itemView = {productView}/>
                    <Product itemView = {productView}/>
                    <Product itemView = {productView}/>
                    <Product itemView = {productView}/>
                    <Product itemView = {productView}/>
                    <Product itemView = {productView}/>
                    <Product itemView = {productView}/>
                    <Product itemView = {productView}/>
                    
              </div>
              <div className="d-flex align-items-center justify-content-center mt-3">
              <Pagination count={10} color="primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
