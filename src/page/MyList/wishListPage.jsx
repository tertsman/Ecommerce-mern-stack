import myListEmpty from "../../assets/image/shopping-cart.png"
import Rating from "@mui/material/Rating";
// import QuantityBox from "../../component/QuantityBox/QuantityBox";
import { Link } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import {  deleteData, getData } from "../../util/api";
import { useNavigate, } from "react-router-dom";
// import { useContext } from "react";
// import { MyContext } from "../../App";
const WishListPage = () => {
  // const [productQuantity, setProductQuantity] = useState();
 const navigate = useNavigate()
//  const context = useContext(MyContext)
  const [myList, setMyList] = useState([]);
  useEffect(() => {
    getWishlist();
  }, []);
  const  getWishlist = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;
      const res = await getData(`/wishlist/user/${user._id}`); // <-- your backend route
      setMyList(res);
    };
  const [message, setMessage] = useState({ open: false, type: "", text: "" });

 const handleClose = () => {
    setMessage({ ...message, open: false });
  };
//   const updateCartItem = async (itemId, newQty, price) => {
//   try {
//     const updatedItem = {
//       quantity: newQty,
//       subTotal: newQty * price,
//     };

//      await APIputData(`/cart/${itemId}`, updatedItem);

//     setCartData((prev) =>
//       prev.map((item) =>
//         item._id === itemId ? { ...item, ...updatedItem } : item
//       )
//     );
//     fetchCart();
//     console.log("the cart update",cartData)
//   } catch (err) {
//     console.error("Update failed:", err);
//   }
// };

const  productId =(productId)=>{
  navigate(`/product/${productId}`)
  // alert(productId)
}
const removeItem = async (id)=>{
  try {
     const res= await deleteData(`/wishlist/${id}`)
  setMessage({
        open: true,
        type: "success",
        text: res.message,
      });
      getWishlist();
  } catch (error) {
     setMessage({
        open: true,
        type: "error",
        text: error.message,
      });
  }
 
}

console.log("mylist",myList)
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
      <section className="cartPage wishlist section mb-5 ">
        <div className="container pt-2">
          <div className="row">
            <div className="col-md-8">
              <h2 className="hd">Your Wishlist</h2>
              <p className=" text-body fs-4 text-black-50 ">
                There are{" "}
                <span className=" text-success fs-5 fw-bold ">
                  {myList.length}
                </span>{" "}
                products in this list
              </p>
            </div>
          </div>

          <div className="row pt-1">
            {
              myList.length !== 0 ? <div className="col-md-12 ">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="70%">Product</th>
                      <th width="15%">Unit Price</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                            {
                              myList?.length!== 0 && myList?.map((item,index)=>{
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
                            
                            
                            <td className=" text-brand ">
                              ${item.price}
                            </td>
                            <td>
                              <span className="remove">
                                <FaRegTrashAlt onClick={()=>removeItem(item.id)} />
                              </span>
                            </td>
                          </tr>
                                )
                              })
                            }
                          
                       
                  </tbody>
                </table>
              </div>
            </div> : 


              <div className="empty col-md-12 d-flex flex-column justify-content-center align-items-center ">

                <div>
                  <img src={myListEmpty} alt={myListEmpty} width="150px" />
                  </div>          
                  <h2 className="mt-2 mb-2">Your wishlist is currently empty </h2>
                  <Link onClick={()=>navigate('/')}><Button variant="contained">
                    Continue to Shopping
                    </Button></Link>
              </div>
            }
            
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default WishListPage;
