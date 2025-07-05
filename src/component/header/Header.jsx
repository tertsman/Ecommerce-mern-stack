import "./header.css";
import logo from "../../assets/image/bacola-logo.png";
import { Link } from "react-router-dom";

import CountryDrop from "../CountryDropDown/CountryDrop";
import { Button } from "@mui/material";
import { LuUser } from "react-icons/lu";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./searchBox/SearchBox";
import Navigation from "./Navigations/Navigation";
import { useContext } from "react";
import { MyContext } from "../../App";

const Header = () => {
  const context = useContext(MyContext);

  return (
    <div className="headerwrapp">
      <div className="top-strip">
        <div className="container">
          <p className="mb-0 mt-0 text-center ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            esse?
          </p>
        </div>
      </div>
      <div className="header ">
        <div className="container">
          <div className="row">
            <div className="logoWrapper d-flex align-items-center col-sm-2">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="col-sm-10 d-flex align-items-center part2">
              {context.countryList.length !== 0 && <CountryDrop />}

              {/* search box start */}
              <SearchBox />
              {/* search box end */}
              <div className="part3 d-flex align-items-center ">
                {context.isLogIn !== true ? (
                  <Button className="signIn-btn">
                    <a href="/signin">Sign In</a>
                  </Button>
                ) : (
                  <Button className="circle ">
                    <LuUser />
                  </Button>
                )}

                <div className="cardTab">
                  <span className="price">$3.05</span>
                  <div className="position-relative">
                    <Button className="circle">
                      <IoBagOutline />
                    </Button>
                    <span className="count">1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* nav bar */}
      <Navigation />
      {/* nav bar */}
    </div>
  );
};

export default Header;
