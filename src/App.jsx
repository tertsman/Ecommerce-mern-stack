import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/home/Home";
import Header from "./component/header/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./component/footer/Footer";
import Listing from "./page/Listing/Listing";
import SingleProduct from "./page/single-product/SingleProduct";
import CartPage from "./page/cart/CartPage";
import SignIn from "./page/signin/SignIn";
import SignUpPage from "./page/signup/SignUpPage";
import { APIpostData, APIputData, getData } from "./util/api";
import { Snackbar, Alert } from "@mui/material";
import WishListPage from "./page/MyList/wishListPage";
import CheckoutPage from "./page/checkout/CheckoutPage";
import PaymentSuccess from "./page/paymentSuccess/PaymentSuccess";
import PaymentCancel from "./page/paymentCancel/PaymentCancel";
import OrderPage from "./page/Order/OrderPage";
const MyContext = createContext();
function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedTabCountry, setSelectedTabCountry] = useState("");
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogIn,setisLogin] = useState(false)
  const [cartData,setCartData] = useState([])
  const [cartItem,setCartItem] = useState([])
  const [isLoading, setIsLoading] = useState(false);
 const [message, setMessage] = useState({ open: false, type: "", text: "" });
  const [user,setUser]= useState({
    name:"",
    email:"",
    userId:""
  })




    

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
    });
    console.log(responsive)
  };

 



const addToCart = async (newItem) => {
  try {
    // STEP 1: Fetch latest cart for current user
    const user = JSON.parse(localStorage.getItem("user"));
    const latestCart = await getData(`/cart/user/${user.userId}`);
    setIsLoading(true)
    // STEP 2: Check if this product already exists in cart
    const existingItem = latestCart.find(
      (item) =>
        item.productId === newItem.productId &&
        item.userId === newItem.userId
    );

    if (existingItem) {
      // STEP 3: If exists → update quantity & subTotal
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + newItem.quantity,
        subTotal: (existingItem.quantity + newItem.quantity) * existingItem.price,
      };

      const res = await APIputData(`/cart/${existingItem._id}`, updatedItem);

      // Update local cartData
      const { _id, ...rest } = res;
      const updated = { id: _id, ...rest };

      setCartData((prev) =>
        prev.map((item) => (item._id === _id ? updated : item))
      );

      setMessage({
        open: true,
        type: "success",
        text: "Cart updated!",
      });
      fetchCart();
        setTimeout(()=>{
         
        setIsLoading(false)
      },1000)
    } else {
      // STEP 4: If not exists → create new cart item
      setIsLoading(true)
      const res = await APIpostData("/cart/create", newItem);
      const { _id, ...rest } = res;
      const newCartItem = { id: _id, ...rest };

      setCartData((prev) => [...prev, newCartItem]);

      setMessage({
        open: true,
        type: "success",
        text: "product add to cart!",
      });
      fetchCart();
      setTimeout(()=>{

        setIsLoading(false)
      },1000)
    }
  } catch (error) {
    
    setMessage({
      open: true,
      type: "error",
      text: error.response?.data?.message || error.message,
    });
    setIsLoading(false)
  }
};



const  fetchCart = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;
      const res = await getData(`/cart/user/${user.userId}`); // <-- your backend route
      setCartItem(res);
      console.log("cartlist", res);
};






  
 
const handleClose = () => {
          setMessage({ ...message, open: false });
        };
  useEffect(()=>{
      getCountry("https://countriesnow.space/api/V0.1/countries/");
     const token = localStorage.getItem("token");
  
     if(token !== null && token !==""){
      setisLogin(true)
  
      const userData = JSON.parse(localStorage.getItem('user'))
      setUser(userData)
      console.log(userData)
     }else{
      setisLogin(false)
     }
fetchCart()
     
    },[isLogIn])

    
  
 const values = {
    countryList,
    setSelectedTabCountry,
    selectedTabCountry,
    setisHeaderFooterShow,
    isHeaderFooterShow,
    isLogIn,
    setisLogin,
    user,setUser,
    addToCart,
    cartData,setCartData,
    isLoading, setIsLoading,
    cartItem,setCartItem,
    fetchCart,
    message, setMessage

  

  };
  return (
    <BrowserRouter>
  <Snackbar
                    open={message.open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  >
                    <Alert
                      onClose={handleClose}
                      severity={message.type}
                      sx={{ width: "100%" }}
                    >
                      {message.text}
                    </Alert>
                  </Snackbar>
      <MyContext.Provider value={values}>
        {isHeaderFooterShow === true && <Header />}

        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:categoryId" exact={true} element={<Listing />} />
          <Route path="/product/:id" exact={true} element={<SingleProduct />} />
          <Route path="/cart" exact={true} element={<CartPage />} />
          <Route path="/wishlist" exact={true} element={<WishListPage />} />
          <Route path="/signin" exact={true} element={<SignIn />} />
          <Route path="/signup" exact={true} element={<SignUpPage />} />
          <Route path="/checkout" exact={true} element={<CheckoutPage />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-cancel" element={<PaymentCancel />} />
        <Route path="/myOrder" element={<OrderPage />} />
        </Routes>
        
        {isHeaderFooterShow === true && <Footer />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };
