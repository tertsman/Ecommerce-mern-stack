import { Rating } from "@mui/material";
import QuantityBox from "../../component/QuantityBox/QuantityBox";
import Button from "@mui/material/Button";
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import ProductZoom from "../../component/productzoom/ProductZoom";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import RelateProduct from "./relate_product/RelateProduct";
import { APIpostData, getData, postData } from "../../util/api";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { useContext } from "react";
import { MyContext } from "../../App";
import { Snackbar, Alert } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const SingleProduct = () => {
  const { id } = useParams();
  const [activeSize, setActiveSize] = useState(null);
  const [activeWeights, setActiveWeights] = useState(null);
  const [activeColors, setActiveColors] = useState(null);
  // const [activeTabs, setActiveTabs] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  let [cartFields, setCartFields] = useState({});
  // const [ratingValue, setRatingValue] = useState(0);
  const [productQuantity, setProductQuantity] = useState();
  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const context = useContext(MyContext);
  const [product, setProduct] = useState([]);
  const [relateProduct, setRelateProduct] = useState([]);
  const [message, setMessage] = useState({ open: false, type: "", text: "" });

  useEffect(() => {
    
    if (id) {
      getData(`/product/${id}`)
        .then((data) => {
          setProduct(data);
          const categoryId = data.category?._id; //
          if (categoryId) {
            getData(`/product/category/${categoryId}`).then((res) => {
              const filtered = res.filter((item) => item._id !== id); // ✅ បំបែក ID ខ្លួនឯងចេញ
              setRelateProduct(filtered);
            });
          }
        })
        .catch(() => {
          console.log("False");
        });
    }
    getReview();
  }, [id]);
  // console.log("relat",relateProduct)

  const description = `<p>${product.description}</p>`;
  const additionalInfo = [
    { label: "Stand Up", value: "35″L x 24″W x 37-45″H (front to back wheel)" },
    { label: "Folded (w/o wheels)", value: "32.5″L x 18.5″W x 16.5″H" },
    { label: "Folded (w/ wheels)", value: "32.5″L x 24″W x 18.5″H" },
    { label: "Door Pass Through", value: "24" },
    { label: "Frame", value: "Aluminum" },
    { label: "Weight (w/o wheels)", value: "20 LBS" },
    { label: "Weight Capacity", value: "60 LBS" },
    { label: "Width", value: "24″" },
    { label: "Handle height (ground to handle)", value: "37-45″" },
    { label: "Wheels", value: "12″ air / wide track slick tread" },
    { label: "Seat back height", value: "21.5″" },
    { label: "Head room (inside canopy)", value: "25″" },
    { label: "Color", value: "Black, Blue, Red, White" },
    { label: "Size", value: "M, S" },
  ];
  const isActive = (index) => {
    setActiveSize(index);
  };

  const isWeight = (index) => {
    setActiveWeights(index);
  };
  const isColors = (index) => {
    setActiveColors(index);
  };

  const [reviews,setReview]=useState([])

  const quantity = (val) => {
    setProductQuantity(val);
  };

  // add to cart
  // eslint-disable-next-line no-unused-vars
  const addToCart = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      // បង្ហាញសារ ឬផ្ញើទៅ login page
      setMessage({
        open: true,
        type: "warning",
        text: "Please login before adding to cart",
      });
      return;
    }

    const cartFields = {
      productTitle: product?.name,
      image: product?.images?.[0],
      rating: product?.rating,
      quantity: productQuantity,
      price: product?.price,
      subTotal: parseInt(product?.price * productQuantity),
      productId: product?._id,
      userId: user.userId,
    };

    context.addToCart(cartFields);
  };
  const handleClose = () => {
    setMessage({ ...message, open: false });
  };

  const rating = Number(product?.rating);

  const [reviewField, setReviewField] = useState({
    productId: "",
    customerName: "",
    customerId: "",
    review: "",
    customerRating: 0,
  });
  const onChangInput = (e) => {
    setReviewField(() => ({
      ...reviewField,
      [e.target.name]: e.target.value,
    }));
  };

  const getReview = async()=>{
    try {
      const res = await getData(`/review?productId=${id}`);
      setReview(res)
    } catch (error) {
      setMessage({
          open: true,
          type: "error",
          text: error.message,
        });
    }
      
  }



  const addToWishlist = async(product) =>{
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user)
      try {
        const res = await APIpostData('/wishlist/create',{
          productTitle: product.name,
          image: product?.images?.[0],
          rating: product.rating,
          price: product.price,
          productId: product.id,
          userId: user?.userId, // អ្នកត្រូវមាន user login រួច
        })
    
        console.log("wishlist",res)
        context.setMessage({
            open: true,
            type: "success",
            text: "product add to your wishlist.!",
          });
      } catch (error) {
        if(error.status== 401){
            context.setMessage({
              open: true,
              type: "error",
              text: "Don't have an account please sign up ",
            });
          }
      }
    }
  


  const onSubmitReview = async (e) => {
    e.preventDefault();

    try {
      const formdata = new FormData();
      const userString = localStorage.getItem("user");
      const user = userString ? JSON.parse(userString) : null;

      formdata.append("productId", id);
      formdata.append("customerName", user?.name);
      formdata.append("customerId", user?.userId);
      formdata.append("review", reviewField?.review);
      formdata.append("customerRating", reviewField?.customerRating);
      

      const res = await postData("/review/create", formdata);
      setMessage({
        open: true,
        type: "success",
        text: res.message || "Thanks for your review!",
      });
      getReview();
      setReviewField({
        review: "",
        customerRating: 0,
      });
    } catch (error) {
      if(error.status== 401){
        setMessage({
          open: true,
          type: "error",
          text: "Don't have an account please sign up ",
        });
      }
    }
  };
  return (
    <>
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
      <section className="Product-single">
        <div className="container mb-5 mt-4">
          <div className="product-quick-header">
            <h4 className="mb-0">{product?.name}</h4>
            <div className="d-flex align-items-center mt-1">
              <div className="d-flex brands align-items-center   px-3 py-1">
                <span>Brands :</span>
                <span className="ms-1">
                  <b>{product?.brand}</b>
                </span>
              </div>
              <div className="d-flex rating align-items-center px-3 py-2">
                <Rating name="read-only" value={rating} readOnly size="small" />
                <p className="mb-0">1review</p>
              </div>
              <div className="d-flex sku align-items-center px-3 py-2">
                <p className="mb-0">SKU: ZU49VOR</p>
              </div>
            </div>
          </div>

          <div className="quick-body row">
            <div className="col-md-4">
              <ProductZoom data={product} />
            </div>
            <div className="col-md-8 details">
              <div className="details-info align-items-center">
                <div className="price">
                  <span className="oldPrice">{product?.oldPrice}</span>
                  <span className="netPrice">{product?.price}</span>
                </div>
                <div className="product-meta">
                  <span className="stock in-stock">
                    {product?.countInStock && product?.countInStock > 0 ? (
                      "In Stock"
                    ) : (
                      <>
                        <span className="outStock">Out of Stock</span>
                      </>
                    )}
                  </span>
                </div>
                <div className="product-short-desc">
                  <p>{product?.description}</p>
                </div>

                <div className="productSize">
                  {product?.sizes && product?.sizes?.length > 0 && (
                    <>
                      <span>Size:</span>
                      <ul>
                        {product?.sizes?.map((value, idx) => (
                          <li key={idx}>
                            <a
                              className={`tag ${
                                activeSize === idx ? "active" : ""
                              }`}
                              onClick={() => isActive(idx)}
                            >
                              {value}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                <div className="productSize">
                  {product?.weights && product?.weights?.length > 0 && (
                    <>
                      <span>Weights:</span>
                      <ul>
                        {product?.weights?.map((value, idx) => (
                          <li key={idx}>
                            <a
                              className={`tag ${
                                activeWeights === idx ? "active" : ""
                              }`}
                              onClick={() => isWeight(idx)}
                            >
                              {value}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                <div className="productSize">
                  {product?.colors && product?.colors?.length > 0 && (
                    <>
                      <span>Colors:</span>
                      <ul>
                        {product?.colors?.map((value, idx) => (
                          <li key={idx}>
                            <a
                              className={`tag ${
                                activeColors === idx ? "active" : ""
                              }`}
                              onClick={() => isColors(idx)}
                            >
                              {value}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                {/* <div className="productSize">
                  <span>Colors:</span>
                  <ul>
                    {product.colors?.map((value, idx) => (
                      <li key={idx}>
                        <a
                          className={`tag ${
                            activeColors === idx ? "active" : ""
                          }`}
                          onClick={() => isColors(idx)}
                        >
                          {value}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="productSize">
                  <span>width:</span>
                  <ul>
                    {product.weights?.map((value, idx) => (
                      <li key={idx}>
                        <a
                          className={`tag ${
                            activeWeights === idx ? "active" : ""
                          }`}
                          onClick={() => isWeight(idx)}
                        >
                          {value}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div> */}
                <div className="product-actions">
                  <QuantityBox quantity={quantity} />
                  <Button className="btn-big btn-addToCard" onClick={addToCart}>
                    {context.isLoading ? (
                      <CircularProgress color="inherit" className="loading" />
                    ) : (
                      <>
                        {" "}
                        <FaShoppingCart /> &nbsp; add to card
                      </>
                    )}
                  </Button>
                </div>
                <div className="d-flex align-item-center mt-5 gap-2">
                  <Button className="btn-wishlist" onClick={()=>addToWishlist(product)}>
                    <CiHeart /> &nbsp; add to Wishlist{" "}
                  </Button>
                  <Button className="btn-wishlist">
                    <IoGitCompareOutline /> &nbsp; compare{" "}
                  </Button>
                </div>
                <div className="product-checklist">
                  <ul>
                    <li>
                      <FaCheck /> &nbsp;category: {product.category?.name}
                    </li>
                    <li>
                      <FaCheck /> &nbsp;MFG:{" "}
                      {dayjs(product.dateCreated).format("DD-MMM-YY")}
                    </li>
                    <li>
                      <FaCheck /> &nbsp;LIFE: 30 days
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <br />

          <div className="card mt-5 p-2 detailsPageTabs">
            <Box sx={{ width: "100%", marginTop: 4 }}>
              <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                aria-label="product tabs"
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
              >
                <Tab label="Description" />
                <Tab label="Additional Info" />
                <Tab label={`Reviews (${reviews.length})`} />
              </Tabs>

              {/* Tab 1 - Description */}
              <Box hidden={tabIndex !== 0} p={2}>
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </Box>

              {/* Tab 2 - Additional Info */}
              <Box hidden={tabIndex !== 1} p={2}>
                <Table>
                  <TableBody>
                    {additionalInfo.map((info, index) => (
                      <TableRow key={index}>
                        <TableCell sx={{ fontWeight: "bold" }}>
                          {info.label}
                        </TableCell>
                        <TableCell>{info.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>

              {/* Tab 3 - Reviews */}
              <Box hidden={tabIndex !== 2} p={2}>
                <div className="row">
                  <div className="col-md-9">
                    <Box mt={4}>
                      <Typography
                        variant="h5"
                        gutterBottom
                        className=" fw-bold "
                      >
                        Customer Questions & Answers
                      </Typography>
                      {
                        reviews?.length !== 0 && reviews?.map((item,index)=>{
                          return(
                            <div key={index} className="media mb-3 mt-5 border p-3 rounded">
                        <img
                          src="https://i.pravatar.cc/80?img=12"
                          className="mr-3 rounded-circle"
                          alt="User"
                          width="60"
                        />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">
                           <span>{item.customerName}</span>&nbsp;
                            <small className="text-muted">
                              {dayjs(item.dateCreated).format("MMMM-DD-YY  h:ss a")}
                            </small>
                          </h6>
                          <div>
                            <span className="text-warning">
                              <Rating name="read-only" value={Number(item.customerRating)} readOnly size="small" />
                            </span>
                          </div>
                          <p>
                            {item.review}
                          </p>
                        </div>
                      </div>
                          )
                        })
                      }
                      
                    </Box>
                  </div>

                  
                </div>
                {/* ⭐ Reviews Summary */}
                <Typography variant="h6" gutterBottom className=" fw-bold ">
                  Add a review
                </Typography>
                <form onSubmit={onSubmitReview} className="form-review">
                  <Box mb={2}>
                    <label className=" fw-bolder ">Rating:</label>
                    <Box>
                      <Rating
                        name="simple-controlled"
                        tye="true"
                        value={parseFloat(reviewField.customerRating)}
                        onChange={(e,value) =>
                          setReviewField({ ...reviewField, customerRating: value })
                        }
                      />
                    </Box>
                  </Box>
  
                  <Box mb={2}>
                    <label>Question:</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      required
                      value={reviewField.review}
                      name="review"
                      onChange={onChangInput}
                    />
                  </Box>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
                {/* 📝 Customer Questions & Answers Form */}
              </Box>
            </Box>
          </div>

          <br />

          <RelateProduct title="related products" data={relateProduct} />
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
