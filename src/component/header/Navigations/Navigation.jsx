import  { useState } from "react";
import { Button } from "@mui/material";
import { RiMenu2Line } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";

const Navigation = () => {


  const [isopenSibebarVal,setisopenSibebarVal] = useState(true)
  return (
    <nav>
      <div className="container">
        <div className="row part0">
          <div className="col-sm-2 navPart1 ">
            <div className="cartwrapper">
              <Button className="allCartTab" onClick={()=>setisopenSibebarVal(!isopenSibebarVal)}>
                <span className="icon1">
                  <RiMenu2Line />
                </span>
                <span className="text">all Categories</span>
                <span className="icon2">
                  <TfiAngleDown />
                </span>
              </Button>
              <div className={`sidebarNav ${isopenSibebarVal ===true ? 'open': ''}`}>
                <ul>
                  <li><Link to="/" className="text-decoration-none">
                  men 
                </Link>
                <div className="submenu shadow">
                  <Link to="/" className="text-decoration-none">CLothing</Link>
                  <Link to="/" className="text-decoration-none">footwear</Link>
                  <Link to="/" className="text-decoration-none">Watch</Link>
                </div>
                </li>
                  <li><Link to="/" className="text-decoration-none">
                  Women 
                </Link>
                <div className="submenu shadow">
                  <Link to="/" className="text-decoration-none">CLothing</Link>
                  <Link to="/" className="text-decoration-none">footwear</Link>
                  <Link to="/" className="text-decoration-none">Watch</Link>
                </div>
                </li>
                  <li><Link to="/" className="text-decoration-none">
                  Beauty 
                </Link>
                <div className="submenu shadow">
                  <Link to="/" className="text-decoration-none">CLothing</Link>
                  <Link to="/" className="text-decoration-none">footwear</Link>
                  <Link to="/" className="text-decoration-none">Watch</Link>
                </div>
                </li>
                  <li><Link to="/" className="text-decoration-none">
                  Kids 
                </Link>
                <div className="submenu shadow">
                  <Link to="/" className="text-decoration-none">CLothing</Link>
                  <Link to="/" className="text-decoration-none">footwear</Link>
                  <Link to="/" className="text-decoration-none">Watch</Link>
                </div>
                </li>
                  <li><Link to="/" className="text-decoration-none">
                  Gift 
                </Link>
                <div className="submenu shadow">
                  <Link to="/" className="text-decoration-none">CLothing</Link>
                  <Link to="/" className="text-decoration-none">footwear</Link>
                  <Link to="/" className="text-decoration-none">Watch</Link>
                </div>
                </li>
                  <li><Link to="/" className="text-decoration-none">
                  Watch
                </Link>
                <div className="submenu shadow">
                  <Link to="/" className="text-decoration-none">CLothing</Link>
                  <Link to="/" className="text-decoration-none">footwear</Link>
                  <Link to="/" className="text-decoration-none">Watch</Link>
                </div>
                </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-10 navPart2  ">
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Link to="/" className="text-decoration-none">
                <AiOutlineHome/> &nbsp;
                  Home
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/" className="text-decoration-none">
                  men &nbsp; <FaAngleDown/>
                </Link>
                <div className="submenu shadow">
                  <Link to="/" className="text-decoration-none">CLothing</Link>
                  <Link to="/" className="text-decoration-none">footwear</Link>
                  <Link to="/" className="text-decoration-none">Watch</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/" className="text-decoration-none">
                  women  &nbsp; <FaAngleDown/>
                </Link>
                <div className="submenu shadow">
                  <Link to="/" className="text-decoration-none">CLothing</Link>
                  <Link to="/" className="text-decoration-none">footwear</Link>
                  <Link to="/" className="text-decoration-none">Watch</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/" className="text-decoration-none">
                  Beauty  &nbsp; <FaAngleDown/>
                </Link>
                <div className="submenu shadow">
                  <Link to="/" className="text-decoration-none">CLothing</Link>
                  <Link to="/" className="text-decoration-none">footwear</Link>
                  <Link to="/" className="text-decoration-none">Watch</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/" className="text-decoration-none">
                  kids  &nbsp; <FaAngleDown/>
                </Link>
                <div className="submenu shadow">
                  <Link to="/" className="text-decoration-none">CLothing</Link>
                  <Link to="/" className="text-decoration-none">footwear</Link>
                  <Link to="/" className="text-decoration-none">Watch</Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/" className="text-decoration-none">
                  gift
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/" className="text-decoration-none">
                  wacth
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/" className="text-decoration-none">
                  Blog
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/" className="text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
