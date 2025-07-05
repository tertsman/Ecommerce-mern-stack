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

const MyContext = createContext();
function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedTabCountry, setSelectedTabCountry] = useState("");
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogIn,setisLogin] = useState(false)

  useEffect(() => {
    getCountry("https://countriesnow.space/api/V0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    const responsive = await axios.get(url).then((res) => {
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  };
  const values = {
    countryList,
    setSelectedTabCountry,
    selectedTabCountry,
    setisHeaderFooterShow,
    isHeaderFooterShow,
    isLogIn,
    setisLogin

  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isHeaderFooterShow === true && <Header />}

        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route path="/product/:id" exact={true} element={<SingleProduct />} />
          <Route path="/cart" exact={true} element={<CartPage />} />
          <Route path="/signin" exact={true} element={<SignIn />} />
          <Route path="/signup" exact={true} element={<SignUpPage />} />
        </Routes>
        
        {isHeaderFooterShow === true && <Footer />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };
