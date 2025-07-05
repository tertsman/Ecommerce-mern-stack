import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";
import banner from "../../assets/Banner/banner2.jpg";

const Sidebar = () => {
  const [value, setValue] = useState([100, 60000]);
  // const [value1, setValue1] = useState(0);

  return (
    <>
      <div className="sidebar">
        <div className="sticky">
          <div className="fillterBox">
            <h6>PRODUCT CATEGORIES</h6>
            <div className="scroll">
              <ul>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Men"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Women"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Beauty"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Kids"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Gift"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Clothing"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Men"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Women"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Beauty"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Kids"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Gift"
                  />
                </li>
                <li>
                  <FormControlLabel
                    className="w-100"
                    control={<Checkbox />}
                    label="Clothing"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="fillterBox">
            <h6>FILLTER BY BRICE</h6>
            <RangeSlider
              value={value}
              onInput={setValue}
              min={100}
              max={60000}
              step={5}
            />
            <div className="d-flex pt-2 pb-2 justify-content-between priceRang">
              <span>
                From: <strong className="text-success">Rs:{value[0]}</strong>
              </span>
              <span>
                From: <strong className="text-success">Rs:{value[1]}</strong>
              </span>
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
