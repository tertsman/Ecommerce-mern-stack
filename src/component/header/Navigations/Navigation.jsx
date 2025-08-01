import  { useState } from "react";
import { Button } from "@mui/material";
import { RiMenu2Line } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
// import { AiOutlineHome } from "react-icons/ai";
// import { FaAngleDown } from "react-icons/fa6";
import { useEffect } from "react";
import { getData } from "../../../util/api";

const Navigation = () => {

  const [isopenSibebarVal,setisopenSibebarVal] = useState(true)

  const [subCate,setSubCate] = useState([])

  const getCate =async () => {
    const res = await getData("/category");

  
    setSubCate(res)
    console.log("res",res)
  }

  useEffect(()=>{
      getCate();
  },[])


  
  return (
    <nav>
      <div className="container">
        <div className="row part0">
          <div className="col-md-2 navPart1 ">
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
              <div className={`sidebarNav ${isopenSibebarVal ===false ? 'open': ''}`}>
                {/* <ul>
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
                </ul> */}

                <ul>
              {
                subCate?.map((item,index)=>(
                  <li key={index}>
                <Link to={`/cat/${item._id}`} className="text-decoration-none">
                  {item.name}
                </Link>
              </li>
                ))
              }

              
            </ul>
              </div>
            </div>
          </div>
          <div className="col-md-10 navPart2 ">
            <ul className="menu">
              <li>
                <Link to='/'>home</Link>
              </li>
              {
                subCate?.map((item,index)=>(
                  <li key={index}>
                <Link to={`/cat/${item._id}`} className="text-decoration-none">
                  {item.name}
                </Link>
              </li>
                ))
              }

              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
