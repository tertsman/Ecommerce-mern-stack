import React, { useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CountryDrop = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList,setCountryList] = useState([]);
  const context = useContext(MyContext);

  const selectCountry = (index,country) => {
    setSelectedTab(index);
    setIsOpenModal(false);
    context.setSelectedTabCountry(country)
  };

 useEffect(()=>{
  setCountryList(context.countryList)
 })

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if(keyword !== ""){
      const list = countryList?.filter((item)=>{
        return item.country.toLowerCase().includes(keyword);
      }) ;
      setCountryList(list);
    }else {
      setCountryList(context.countryList)
    }
   
    
  }

  return (
    <>
      <Button className="CountryDrop" onClick={() => setIsOpenModal(true)}>
        <div className="info d-flex flex-column ml-10 ">
          <span className="label">Your Location</span>
          <span className="name" >{context.selectedTabCountry !== "" ? context.selectedTabCountry?.length > 10 ? context.selectedTabCountry?.substr(0,10)+ '...' : context.selectedTabCountry : "Select location"}</span>
          
        </div>
        <span className=" ml-auto m-lg-auto">
          <FaAngleDown />
        </span>
      </Button>
      <Dialog
        open={isOpenModal}
        TransitionComponent={Transition}
        onClose={() => setIsOpenModal(false)}
        className="locationModal"
      >
        <h4 className="mb-0">Shoose your Delivery Location</h4>
        <p>Enter you address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={() => setIsOpenModal(false)}>
          <IoMdClose />
        </Button>
        <div className="headersearch ">
          <input type="text" placeholder="Search your area.. " onChange={filterList} />
          <Button>
            <IoIosSearch />
          </Button>
        </div>
        <ul className="countryList">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index,item.country)}
                    className={`${selectedTab === index ? "Active" : ""}`}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDrop;
