/* eslint-disable react/prop-types */
// import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";
import banner from "../../assets/Banner/banner2.jpg";
import { getData } from "../../util/api";
import { useEffect } from "react";

const Sidebar = (props) => {
  // const [value, setValue] = useState([100, 60000]);
  const [subCate,setSubCate] = useState([])
  
    const getCate =async () => {
      const res = await getData("/category");
  
      // if(res.ok){
      //   setSubCate(res)
      // }
      setSubCate(res)
      console.log("res",res)
    }
  
    useEffect(()=>{
        getCate();
    },[])

    const filterBycategory = (categoryId) =>{
      props.filterData(categoryId);
    }

  return (
    <>
      <div className="sidebar">
        <div className="sticky">
          <div className="fillterBox">
            <h6>PRODUCT CATEGORIES</h6>
            <div className="scroll">

              
              <ul>
                {
                  subCate?.map((item,index)=>(

                <li key={index}>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox onClick={()=> filterBycategory(item._id)} />}
                    label={item.name}
                  />
                </li>
                  ))
                }
                
              </ul>
            </div>
          </div>
       
          <div className="fillterBox">
            <h6>PRODUCT STATUS</h6>
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="In Stock"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="On Sale"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="fillterBox">
            <h6>BRANDS</h6>
            <div className="scroll">
              <ul>
                <li className="d-flex align-content-center">
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Nike"
                  />
                  <span>(9)</span>
                </li>
                <li className="d-flex align-content-center">
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Adidas"
                  />
                  <span>(9)</span>
                </li>
                <li className="d-flex align-content-center">
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Nespresso"
                  />
                  <span>(9)</span>
                </li>
                <li className="d-flex align-content-center">
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Oreo"
                  />
                  <span>(9)</span>
                </li>
                <li className="d-flex align-content-center">
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Welch's"
                  />
                  <span>(9)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="banner">
            <img src={banner} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
