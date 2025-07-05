import { Rating } from "@mui/material";
import QuantityBox from "../../component/QuantityBox/QuantityBox";
import Button from "@mui/material/Button";
import { CiHeart } from "react-icons/ci";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import ProductZoom from "../../component/productzoom/ProductZoom";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import RelateProduct from "./relate_product/RelateProduct";
const SingleProduct = () => {
  const [activeSize, setActiveSize] = useState(null);
  // const [activeTabs, setActiveTabs] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const [ratingValue, setRatingValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  const description =
    "<p>This is a high-quality product made from durable material.</p>";
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
  const reviews = [
    { user: "Chan", comment: "Excellent phone for the price!" },
    { user: "Sok", comment: "Battery life is amazing." },
  ];
  return (
    <>
      <section className="Product-single">
        <div className="container mb-5 mt-4">
          <div className="product-quick-header">
            <h4 className="mb-0">
              All Natural Italian-Style Chicken Meatballs
            </h4>
            <div className="d-flex align-items-center mt-1">
              <div className="d-flex brands align-items-center   px-3 py-1">
                <span>Brands :</span>
                <span className="ms-1">
                  <b>Welch's</b>
                </span>
              </div>
              <div className="d-flex rating align-items-center px-3 py-2">
                <Rating name="read-only" value={5} readOnly size="small" />
                <p className="mb-0">1review</p>
              </div>
              <div className="d-flex sku align-items-center px-3 py-2">
                <p className="mb-0">SKU: ZU49VOR</p>
              </div>
            </div>
          </div>

          <div className="quick-body row">
            <div className="col-md-4">
              <ProductZoom />
            </div>
            <div className="col-md-8 details">
              <div className="details-info align-items-center">
                <div className="price">
                  <span className="oldPrice">$9.35</span>
                  <span className="netPrice">$7.25</span>
                </div>
                <div className="product-meta">
                  <span className="stock in-stock">In Stock</span>
                </div>
                <div className="product-short-desc">
                  <p>
                    Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                    luctus malesuada tincidunt. Class aptent taciti sociosqu ad
                    litora torquent
                  </p>
                </div>
                <div className="productSize">
                  <span>Size / Weight :</span>
                  <ul>
                    <li>
                      <a
                        className={`tag ${activeSize === 0 ? "active" : ""}`}
                        onClick={() => isActive(0)}
                      >
                        50g
                      </a>
                    </li>
                    <li>
                      <a
                        className={`tag ${activeSize === 1 ? "active" : ""}`}
                        onClick={() => isActive(1)}
                      >
                        100g
                      </a>
                    </li>
                    <li>
                      <a
                        className={`tag ${activeSize === 2 ? "active" : ""}`}
                        onClick={() => isActive(2)}
                      >
                        150g
                      </a>
                    </li>
                    <li>
                      <a
                        className={`tag ${activeSize === 3 ? "active" : ""}`}
                        onClick={() => isActive(3)}
                      >
                        200g
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product-actions">
                  <QuantityBox />
                  <Button className="btn-big btn-addToCard">
                    <FaShoppingCart /> &nbsp; add to card
                  </Button>
                </div>
                <div className="d-flex align-item-center mt-5 gap-2">
                  <Button className="btn-wishlist">
                    <CiHeart /> &nbsp; add to Wishlist{" "}
                  </Button>
                  <Button className="btn-wishlist">
                    <IoGitCompareOutline /> &nbsp; compare{" "}
                  </Button>
                </div>
                <div className="product-checklist">
                  <ul>
                    <li>
                      <FaCheck /> &nbsp;Type: Organic
                    </li>
                    <li>
                      <FaCheck /> &nbsp;MFG: Jun 4.2021
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
                        variant="h6"
                        gutterBottom
                        className=" fw-bold "
                      >
                        Customer Questions & Answers
                      </Typography>
                      <div className="media mb-3 mt-5 border p-3 rounded">
                        <img
                          src="https://i.pravatar.cc/80?img=12"
                          className="mr-3 rounded-circle"
                          alt="User"
                          width="60"
                        />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">
                            Sienna{" "}
                            <small className="text-muted">
                              December 4, 2024 at 3:12 pm
                            </small>
                          </h6>
                          <div>
                            <span className="text-warning">★★★★☆</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Delectus, suscipit exercitationem...
                          </p>
                        </div>
                      </div>
                      <div className="media mb-3 mt-5 border p-3 rounded">
                        <img
                          src="https://i.pravatar.cc/80?img=12"
                          className="mr-3 rounded-circle"
                          alt="User"
                          width="60"
                        />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">
                            Sienna{" "}
                            <small className="text-muted">
                              December 4, 2024 at 3:12 pm
                            </small>
                          </h6>
                          <div>
                            <span className="text-warning">★★★★☆</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Delectus, suscipit exercitationem...
                          </p>
                        </div>
                      </div>
                      <div className="media mb-3 mt-5 border p-3 rounded">
                        <img
                          src="https://i.pravatar.cc/80?img=12"
                          className="mr-3 rounded-circle"
                          alt="User"
                          width="60"
                        />
                        <div className="media-body">
                          <h6 className="mt-0 mb-1">
                            Sienna{" "}
                            <small className="text-muted">
                              December 4, 2024 at 3:12 pm
                            </small>
                          </h6>
                          <div>
                            <span className="text-warning">★★★★☆</span>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Delectus, suscipit exercitationem...
                          </p>
                        </div>
                      </div>
                    </Box>

                    {/* 💬 Customer Reviews List */}
                  </div>

                  <div className="col-md-3">
                    <Typography variant="h6" gutterBottom>
                      Customer Reviews
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                      4.8 out of 5
                    </Typography>

                    {[5, 4, 3, 2, 1].map((star) => {
                      const percentage = {
                        5: 50,
                        4: 25,
                        3: 45,
                        2: 65,
                        1: 10,
                      }[star];

                      return (
                        <Box
                          key={star}
                          display="flex"
                          alignItems="center"
                          mb={1}
                        >
                          <Typography style={{ width: 50 }}>
                            {star} star
                          </Typography>
                          <Box flexGrow={1} mx={1}>
                            <Box
                              height={10}
                              borderRadius={5}
                              bgcolor="#e0e0e0"
                              overflow="hidden"
                            >
                              <Box
                                width={`${percentage}%`}
                                height="100%"
                                bgcolor="#fbc02d"
                              />
                            </Box>
                          </Box>
                          <Typography>{percentage}%</Typography>
                        </Box>
                      );
                    })}
                  </div>
                </div>
                {/* ⭐ Reviews Summary */}
                <Typography variant="h6" gutterBottom className=" fw-bold ">
                  Add a review
                </Typography>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // 👉 Handle submit logic here
                  }}
                  className="form-review"
                >
                  <Box mb={2}>
                    <label className=" fw-bolder ">Rating:</label>
                    <Box>
                      <Rating
                        name="rating"
                        value={ratingValue}
                        onChange={(event, newValue) => {
                          setRatingValue(newValue);
                        }}
                      />
                    </Box>
                  </Box>
                  <Box mb={2}>
                    <label>Name:</label>
                    <input className="form-control" type="text" required />
                  </Box>
                  <Box mb={2}>
                    <label>Question:</label>
                    <textarea className="form-control" rows="3" required />
                  </Box>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
                {/* 📝 Customer Questions & Answers Form */}
              </Box>
            </Box>
          </div>


          <br/>

          <RelateProduct title = "related products"/>
          <RelateProduct title = "recently viewed product"/>

        </div>
      </section>
    </>
  );
};

export default SingleProduct;
