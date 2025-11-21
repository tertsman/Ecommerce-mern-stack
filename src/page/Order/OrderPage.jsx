import React from "react";
import { getData } from "../../util/api";
import { useState } from "react";
import { useEffect } from "react";
import dayjs from "dayjs";
import Dialog from "@mui/material/Dialog";
import { IoMdClose } from "react-icons/io";
import Button from "@mui/material/Button";

const OrderPage = () => {
  const [orderData, setOrderDate] = useState([]);
 const [product,setProduct]= useState([])
 const [isOpenModal,setIsOpenModal] = useState(false)
  const getOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    const res = await getData(`/order/user/${user._id}`); // <-- your backend route
    setOrderDate(res);
    
  };

  useEffect(() => {
    getOrder();
  }, []);


  const ViewProduct = async (id)=>{
    const res = await getData(`/order/${id}`);
    setProduct(res)
    
    setIsOpenModal(true)
    
  }
  return (
    <>
      <section className="mt-5 mb-4">
        <div className="container">
          <h2 className="hd">Your Orders</h2>
          <div className="table-responsive orderPage">
            <table className="table table-striped table-bordered">
              <thead>
                <tr className="table-dark">
                  <th>Order Id</th>
                  <th>Tran_Id</th>
                  <th>Products</th>
                  <th>Address</th>
                  <th>Payment Status</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {orderData?.length !== 0 &&
                  orderData?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          #
                          {item._id.length > 5
                            ? item._id.substr(0, 5) + "..."
                            : item._id}
                        </td>
                        <td>
                          #
                          {item.tran_id.length > 10
                            ? item.tran_id.substr(0, 10) + "..."
                            : item.tran_id}
                        </td>
                        <td>
                          <span className="btn-view-detail" onClick={()=>ViewProduct(item._id)}>View</span>
                        </td>
                        <td>
                          {item.address.length !== 0 &&
                            item.address.map((item1, index1) => {
                              return (
                                <div key={index1} className="address">
                                  <span>{item1.name}</span>
                                  <span>{item1.email}</span>
                                  <span>{item1.phone}</span>
                                  <span>{item1.country}</span>
                                  <span>{item1.zip}</span>
                                  <span>{item1.city}</span>
                                  <span>{item1.street}</span>
                                </div>
                              );
                            })}
                        </td>
                        <td>
                          {item.paymentStatus == "pending" ? (
                            <span className="pending">
                              {item.paymentStatus}
                            </span>
                          ) : (
                            <span className="success">
                              {item.paymentStatus}
                            </span>
                          )}
                        </td>
                        <td>${item.amount}</td>
                        <td>{dayjs(item.createdAt).format("DD-MMM-YYYY")}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Dialog open={isOpenModal} onClose={() => {}} className="productModal">
        <div className="OrderProduct ">
          <div className="orderProductHeader productModal">
            <h2>Product</h2>
            <Button className="close_" onClick={() => setIsOpenModal(false)}>
              <IoMdClose />
            </Button>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Id</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
             
              <tbody>
                {
                    product.cartItems?.length !== 0 && product.cartItems?.map((item2,index2)=>{
                        return(
                            <tr key={index2}>
                                    <td>
                    <div className="cartItemImageWrapper d-flex align-items-center justify-content-start ">
                      <div className="imageWrapper">
                        <img
                          src={item2.image}
                          alt={item2.productTitle}
                        />
                      </div>
                    </div>
                  </td>

                  <td>{item2.productId}</td>
                  <td>{item2.productTitle}</td>
                  <td><b>x{item2.quantity}</b></td>
                  <td>${item2.price.toFixed(2)}</td>
                  <td>${item2.subTotal}</td>
                            </tr>
                        )
                    })
                }
                
              </tbody>
            </table>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default OrderPage;
