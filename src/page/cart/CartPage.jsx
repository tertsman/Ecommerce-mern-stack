
import snack from "../../assets/Banner/snack.png";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../component/QuantityBox/QuantityBox";
import { Link } from "@mui/material";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "@mui/material/Button";
const CartPage = () => {
  return (
    <div>
      <section className="cartPage section ">
        <div className="container pt-2">
          <div className="row">
            <div className="col-md-8">
              <h2 className="hd">Your cart</h2>
              <p className=" text-body fs-4 text-black-50 ">
                There are <span className=" text-success fs-2 fw-bold ">3</span>{" "}
                products in your cart
              </p>
            </div>
          </div>

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
                    <tr>
                      <td>
                        <Link part="/product">
                          <div className="cartItemImageWrapper d-flex align-items-center justify-content-center ">
                            <div className="imageWrapper">
                              <img src={snack} alt="" />
                            </div>
                            <div className="info px-3 ">
                              <h6>Field Roast Chao Cheese Creamy Original</h6>
                              <div className="d-flex align-items-center justify-content-start ">
                                <Rating
                                  name="read-only"
                                  value={4.5}
                                  readOnly
                                  precision={0.5}
                                  size="small"
                                />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td>$2.51</td>
                      <td>
                        <QuantityBox />
                      </td>
                      <td className=" text-brand ">$2.51</td>
                      <td>
                        <span className="remove">
                          <FaRegTrashAlt />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link part="/product">
                          <div className="cartItemImageWrapper d-flex align-items-center justify-content-center ">
                            <div className="imageWrapper">
                              <img src={snack} alt="" />
                            </div>
                            <div className="info px-3 ">
                              <h6>Field Roast Chao Cheese Creamy Original</h6>
                              <div className="d-flex align-items-center justify-content-start ">
                                <Rating
                                  name="read-only"
                                  value={4.5}
                                  readOnly
                                  precision={0.5}
                                  size="small"
                                />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td>$2.51</td>
                      <td>
                        <QuantityBox />
                      </td>
                      <td className=" text-brand ">$2.51</td>
                      <td>
                        <span className="remove">
                          <FaRegTrashAlt />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link part="/product">
                          <div className="cartItemImageWrapper d-flex align-items-center justify-content-center ">
                            <div className="imageWrapper">
                              <img src={snack} alt="" />
                            </div>
                            <div className="info px-3 ">
                              <h6>Field Roast Chao Cheese Creamy Original</h6>
                              <div className="d-flex align-items-center justify-content-start ">
                                <Rating
                                  name="read-only"
                                  value={4.5}
                                  readOnly
                                  precision={0.5}
                                  size="small"
                                />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td>$2.51</td>
                      <td>
                        <QuantityBox />
                      </td>
                      <td className=" text-brand ">$2.51</td>
                      <td>
                        <span className="remove">
                          <FaRegTrashAlt />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link part="/product">
                          <div className="cartItemImageWrapper d-flex align-items-center justify-content-center ">
                            <div className="imageWrapper">
                              <img src={snack} alt="" />
                            </div>
                            <div className="info px-3 ">
                              <h6>Field Roast Chao Cheese Creamy Original</h6>
                              <div className="d-flex align-items-center justify-content-start ">
                                <Rating
                                  name="read-only"
                                  value={4.5}
                                  readOnly
                                  precision={0.5}
                                  size="small"
                                />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td>$2.51</td>
                      <td>
                        <QuantityBox />
                      </td>
                      <td className=" text-brand ">$2.51</td>
                      <td>
                        <span className="remove">
                          <FaRegTrashAlt />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link part="/product">
                          <div className="cartItemImageWrapper d-flex align-items-center justify-content-center ">
                            <div className="imageWrapper">
                              <img src={snack} alt="" />
                            </div>
                            <div className="info px-3 ">
                              <h6>Field Roast Chao Cheese Creamy Original</h6>
                              <div className="d-flex align-items-center justify-content-start ">
                                <Rating
                                  name="read-only"
                                  value={4.5}
                                  readOnly
                                  precision={0.5}
                                  size="small"
                                />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td>$2.51</td>
                      <td>
                        <QuantityBox />
                      </td>
                      <td className=" text-brand ">$2.51</td>
                      <td>
                        <span className="remove">
                          <FaRegTrashAlt />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-4 pl-2 ">
              <div className="card shadow p-2 cardDetails">
                <h4>cart totals</h4>
                <div className="d-flex align-items-center mb-3">
                  <span className="text-gray">Subtotal</span>
                  <span className="text-brand ml-auto">$12.31</span>
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
                  <span className="text-brand ml-auto">$12.31</span>
                </div>
                <Button className="addtocard">Add to card</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
