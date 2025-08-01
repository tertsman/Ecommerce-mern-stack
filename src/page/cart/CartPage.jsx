// import snack from "../../assets/Banner/snack.png";
import myListEmpty from "../../assets/image/shopping-cart.png"

import Rating from "@mui/material/Rating";
import QuantityBox from "../../component/QuantityBox/QuantityBox";
import { Link } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { APIputData, deleteData, getData } from "../../util/api";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../App";
const CartPage = () => {
  // const [productQuantity, setProductQuantity] = useState();
 const navigate = useNavigate()
 const context = useContext(MyContext)
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    fetchCart();
  }, []);
  const  fetchCart = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;
      const res = await getData(`/cart/user/${user.userId}`); // <-- your backend route
      setCartData(res);
      console.log("cartlist", res);
    };
  const [message, setMessage] = useState({ open: false, type: "", text: "" });

  // const quantity = (val) => {
  //   setProductQuantity(val);
  // };
 const handleClose = () => {
    setMessage({ ...message, open: false });
  };
  const updateCartItem = async (itemId, newQty, price) => {
  try {
    const updatedItem = {
      quantity: newQty,
      subTotal: newQty * price,
    };

     await APIputData(`/cart/${itemId}`, updatedItem);

    setCartData((prev) =>
      prev.map((item) =>
        item._id === itemId ? { ...item, ...updatedItem } : item
      )
    );
    fetchCart();
    console.log("the cart update",cartData)
  } catch (err) {
    console.error("Update failed:", err);
  }
};

const  productId =(productId)=>{
  navigate(`/product/${productId}`)
  // alert(productId)
}
const removeItem = async (id)=>{
  try {
     const res= await deleteData(`/cart/${id}`)
  setMessage({
        open: true,
        type: "success",
        text: res.message,
      });
      fetchCart();
      context.fetchCart();
  } catch (error) {
     setMessage({
        open: true,
        type: "error",
        text: error.message,
      });
  }
 
}
  return (
    <div>

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
      <section className="cartPage section mb-5 ">
        <div className="container pt-2">
          <div className="row">
            <div className="col-md-8">
              <h2 className="hd">Your cart</h2>
              <p className=" text-body fs-4 text-black-50 ">
                There are{" "}
                <span className=" text-success fs-3 fw-bold ">
                  {cartData.length}
                </span>{" "}
                products in your cart
              </p>
            </div>
          </div>
          {
            cartData?.length !== 0 ? 
            
            <div className="row pt-1">
            <div className="col-md-8 ">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="50%">Product</th>
                      <th width="15%">Unit Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData?.length !== 0 &&
                      cartData?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              <Link onClick={()=>productId(item.productId)}>
                                <div className="cartItemImageWrapper d-flex align-items-center justify-content-start ">
                                  <div className="imageWrapper">
                                    <img
                                      src={item.image}
                                      alt={item.productTitle}
                                    />
                                  </div>
                                  <div className="info px-3 ">
                                    <h6>{item.productTitle}</h6>
                                    <div className="d-flex align-items-center justify-content-start ">
                                      <Rating
                                        name="read-only"
                                        value={Number(item.rating)}
                                        readOnly
                                        precision={0.5}
                                        size="small"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>${item.price}</td>
                            <td>
                              <QuantityBox
                                defaultValue={item.quantity}
                                quantity={(newQty) =>
                                  updateCartItem(item._id, newQty, item.price)
                                }
                              />
                              {/* <QuantityBox  quantity={quantity} /> */}
                            </td>
                            <td className=" text-brand ">${item.subTotal}</td>
                            <td>
                              <span className="remove">
                                <FaRegTrashAlt onClick={()=>removeItem(item._id)} />
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-4 pl-2 ">
              <div className="card shadow p-2 cardDetails">
                <h4>cart totals</h4>
                <div className="d-flex align-items-center mb-3">
                  <span className="text-gray">Subtotal</span>
                  <span className="text-brand ml-auto">
                    $ {cartData?.length > 0 && cartData.map(item=> parseInt(item.price) * item.quantity).reduce((total,value)=> total+ value,0).toFixed(2)}
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span className="text-gray">Shipping</span>
                  <span className=" ml-auto ">
                    <b>Free</b>
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span className="text-gray">Estimate for</span>
                  <span className=" ml-auto">
                    <b>United Kingdom</b>
                  </span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span className="text-gray">Subtotal</span>
                  <span className="text-brand ml-auto">$ {cartData?.length > 0 && cartData.map(item=> parseInt(item.price) * item.quantity).reduce((total,value)=> total+ value,0).toFixed(2)}</span>
                </div>
                <Button className="addcart" onClick={()=>navigate('/checkout')} >Check out</Button>
              </div>
            </div>
          </div>
            
            
            
            :<div className="empty col-md-12 d-flex flex-column justify-content-center align-items-center ">
            
                            <div>
                              <img src={myListEmpty} alt={myListEmpty} width="150px" />
                              </div>          
                              <h2 className="mt-2 mb-2">Your cart is currently empty </h2>
                              <Link onClick={()=>navigate('/')}><Button variant="contained">
                                Continue to Shopping
                                </Button></Link>
              </div>
          }
          
        </div>
      </section>
    </div>
  );
};

export default CartPage;
