// import "./header.css";
import logo from "../../assets/image/bacola-logo.png";
import { Link, useNavigate } from "react-router-dom";

import CountryDrop from "../CountryDropDown/CountryDrop";
import { Button } from "@mui/material";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from "./searchBox/SearchBox";
import Navigation from "./Navigations/Navigation";
import { useContext, useState } from "react";
import { MyContext } from "../../App";
import { TbShoppingCartHeart } from "react-icons/tb";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { HiShoppingCart } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { useEffect } from "react";
import { getData } from "../../util/api";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const context = useContext(MyContext);
  // const [cartData, setCartData] = useState([]);
   const [cartItem,setCartItem] = useState([])
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isMobileSideBar,setIsMobileSideBar]=useState(false)
 const[overlay,setOverlay]= useState(false)
  const logout = () => {
    localStorage.clear();
    navigate("/signin");
    setAnchorEl(null);
  };

  const isOpenSidebar = () =>{
    setIsMobileSideBar(!isMobileSideBar)
    setOverlay(!overlay)
  }
  const isCloseSidebar = () =>{
    setIsMobileSideBar(!isMobileSideBar)
    setOverlay(!overlay)
  }




  const [subCate,setSubCate] = useState([])
  
    const getCate =async () => {
      const res = await getData("/category");
  
    
      setSubCate(res)
    }
  


  
  useEffect(() => {
    // fetchCart();
    if (context.fetchCart !== "") {
      console.log(JSON.stringify(context.fetchCart));
    }
    fetchCart1()
    getCate();
  }, [context.fetchCart]);

  const  fetchCart1 = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) return;
        const res = await getData(`/cart/user/${user.userId}`); // <-- your backend route
        setCartItem(res);
        
  };
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
               <div className="logo">
                  eco<span>Shop</span>
                </div>
              </Link>
            </div>
            <div className="col-sm-10 d-flex align-items-center part2">
              {context.countryList?.length !== 0 && <CountryDrop />}

              {/* search box start */}
              <SearchBox />
              {/* search box end */}
              <div className="part3 d-flex align-items-center ">
                {context.isLogIn !== true ? (
                  <Button className="signIn-btn">
                    <a href="/signin">Sign In</a>
                  </Button>
                ) : (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Tooltip title="Account settings">
                        <IconButton
                          onClick={handleClick}
                          size="small"
                          sx={{ ml: 2 }}
                          aria-controls={open ? "account-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                        >
                          <Avatar
                            sx={{ width: 32, height: 32 }}
                            className="userName"
                          >
                            {context.user?.name.charAt(0)}
                          </Avatar>
                        </IconButton>
                      </Tooltip>
                    </Box>

                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      slotProps={{
                        paper: {
                          elevation: 0,
                          sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            "&::before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: "background.paper",
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                            },
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem onClick={handleClose}>
                        <FaRegCircleUser />
                        &nbsp; Profile
                      </MenuItem>
                      <Link to="/myOrder">
                      <MenuItem onClick={handleClose}>
                        <HiShoppingCart />
                        &nbsp; My Order
                      </MenuItem>
                      </Link>
                      <Link to='/wishlist'> 
                      <MenuItem onClick={handleClose}>
                        <TbShoppingCartHeart />
                        &nbsp; wishlist
                      </MenuItem>
                      </Link>
                      <Divider />

                      <MenuItem onClick={logout}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Menu>
                  </>
                )}

                <div className="cardTab">
                  <span className="price">
                    $
                    {cartItem?.length > 0
                      ? cartItem
                          .map(
                            (item) =>
                              parseFloat(item.price || 0) *
                              parseInt(item.quantity || 0)
                          )
                          .reduce((total, value) => total + value, 0)
                          .toFixed(2)
                      : "0.00"}
                  </span>
                  <div className="position-relative">
                    <Link to="/cart">
                      <Button className="circle">
                        <IoBagOutline />
                      </Button>
                    </Link>
                    <span className="count">{cartItem.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobileHeader">
            <div className="container">
              <div className="headerContainer-mobile">
                <div className="toggleSidebar">
                         <CiMenuBurger onClick={isOpenSidebar}/>
                </div>
                <Link to={"/"}>
                <div className="logo">
                  eco<span>Shop</span>
                </div>
                </Link>
                <div className="mobileLeft">
                  {context.isLogIn !== true ? (
                  <Button className="signIn-btn">
                    <a href="/signin">Sign In</a>
                  </Button>
                ) : (
                  <>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                    >
                      <Tooltip title="Account settings">
                        <IconButton
                          onClick={handleClick}
                          size="small"
                          sx={{ ml: 2 }}
                          aria-controls={open ? "account-menu" : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                        >
                          <Avatar
                            sx={{ width: 32, height: 32 }}
                            className="userName"
                          >
                            {context.user?.name.charAt(0)}
                          </Avatar>
                        </IconButton>
                      </Tooltip>
                    </Box>

                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      slotProps={{
                        paper: {
                          elevation: 0,
                          sx: {
                            overflow: "visible",
                            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                            mt: 1.5,
                            "& .MuiAvatar-root": {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                            },
                            "&::before": {
                              content: '""',
                              display: "block",
                              position: "absolute",
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: "background.paper",
                              transform: "translateY(-50%) rotate(45deg)",
                              zIndex: 0,
                            },
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: "right", vertical: "top" }}
                      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                    >
                      <MenuItem onClick={handleClose}>
                        <FaRegCircleUser />
                        &nbsp; Profile
                      </MenuItem>
                      <Link to="/myOrder">
                      <MenuItem onClick={handleClose}>
                        <HiShoppingCart />
                        &nbsp; My Order
                      </MenuItem>
                      </Link>
                      <Link to='/wishlist'> 
                      <MenuItem onClick={handleClose}>
                        <TbShoppingCartHeart />
                        &nbsp; wishlist
                      </MenuItem>
                      </Link>
                      <Divider />

                      <MenuItem onClick={logout}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Menu>
                  </>
                )}

                <div className="cardTab">
                  <span className="price">
                    $
                    {cartItem?.length > 0
                      ? cartItem
                          .map(
                            (item) =>
                              parseFloat(item.price || 0) *
                              parseInt(item.quantity || 0)
                          )
                          .reduce((total, value) => total + value, 0)
                          .toFixed(2)
                      : "0.00"}
                  </span>
                  <div className="position-relative">
                    <Link to="/cart">
                      <Button className="circle">
                        <IoBagOutline />
                      </Button>
                    </Link>
                    <span className="count">{cartItem.length}</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
      </div>

      <div className= {`mobileSideBar ${isMobileSideBar !==false ? "open":""}`}>
        <div className="sibebarHeader">
          <Link to={"/"}>
                <div className="logo">
                  eco<span>Shop</span>
                </div>
          </Link>
          <div className="closeSidebar">
            <IoMdClose onClick={isCloseSidebar}/>
          </div>
        </div>
        {context.countryList?.length !== 0 && <CountryDrop />}
        <div className="navigateSideBar">
          <p>Navigate Sit</p>
          <div className="navigateSide">
            <ul>
              {
                subCate?.map((item,index)=>(
                  <li key={index}>
                <Link to={`/cat/${item._id}`} className="text-decoration-none" onClick={isCloseSidebar}>
                  {item.name}
                </Link>
              </li>
                ))
              }

              
            </ul>
          </div>

        </div>
      </div>
      <div className={`overlay ${overlay !==false ? "open":""}`} onClick={isCloseSidebar}></div>
      {/* nav bar */}
      <Navigation />
      {/* nav bar */}
    </div>
  );
};

export default Header;
