import HomerBanner from "../../component/homeBanner/HomerBanner";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import Rating from "@mui/material/Rating";
import { AiOutlineFullscreen } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import banner2 from "../../assets/Banner/banner2.jpg";
import banner4 from "../../assets/Banner/banner4.avif";
import banner5 from "../../assets/Banner/banner5.jpg";
import banner6 from "../../assets/Banner/R.jpg";
import snack from "../../assets/Banner/snack.png";
import UserMt from "../../assets/Banner/userMt.jpg";
import UserM1 from "../../assets/Banner/userMt2.avif";
import laycy from "../../assets/Banner/lacy.webp";
import newSletterImage from "../../assets/Banner/coupon.webp";
import { IoMailOutline } from "react-icons/io5";
import HomeCat from "../../component/HomeCat/HomeCat";
import Product from "../../component/Product/Product";


const Home = () => {
  const ProductSlideOptions = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    loop: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <div className="container home">
        <HomerBanner />
      </div>
      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img
                    src="https://img.freepik.com/premium-psd/fresh-fruits-banner-social-media-flyer-design-template_509525-175.jpg?w=2000"
                    alt=""
                    className="cursor"
                  />
                </div>

                <div className="banner mt-5 ">
                  <img src={banner2} alt="" className="cursor" />
                </div>

                

                {/* <div className="customer-cmt mt-5">
                  <h4>customer Commend</h4>
                  <div className="customer-cmt-box">
                    <div className="customerMt-head">
                      <h5>The Best Marketplace</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laborum, sit!
                      </p>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ">
                        <div className="imgWrapper">
                          <img src={UserM1} alt="" />
                        </div>
                      </div>
                      <div className="col-md-9 title">
                        <h5>Alizabel</h5>
                        <p>Sale Manager</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 ">
                        <div className="imgWrapper">
                          <img src={UserMt} alt="" />
                        </div>
                      </div>
                      <div className="col-md-9 title">
                        <h5>Alizabel</h5>
                        <p>Sale Manager</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex align-items-center productRow">
                <div className="info mb-0">
                  <h5 className="hd">BEST SELLER</h5>
                  <p className=" text-light text-sml ">
                    Do not miss the current offers until the end of mach.
                  </p>
                </div>
                <Button className="viewAll">
                  View All &nbsp; <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="product_row">
                <Slider {...ProductSlideOptions}>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                 
                </Slider>
              </div>

              <div className="bannerMiddl d-flex align-items-center productRow mt-4">
                <div className="banner w-100">
                  {/* <img src={maketing} alt="" className="w-100" /> */}
                </div>
              </div>
              <div className="d-flex align-items-center productRow mt-4">
                <div className="info mb-0">
                  <h5 className="hd">NEW PRODUCT</h5>
                  <p className=" text-light text-sml ">
                  New products with updated stocks.
                  </p>
                </div>
                <Button className="viewAll">
                  View All &nbsp; <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="product_row">
                <Slider {...ProductSlideOptions}>
                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src="https://media.premiumtimesng.com/wp-content/files/2021/10/Indomie.png"
                        alt=""
                        className="w-100"
                      />

                      <span className="badge ">28%</span>
                      <div className="actions">
                        <Button>
                          <AiOutlineFullscreen />
                        </Button>
                        <Button>
                          <CiHeart />
                        </Button>
                      </div>
                    </div>
                    <div className="title">
                      <Rating name="read-only" value={5} readOnly />
                      <div className="text-des">
                        <h4>Product Name</h4>
                        <p>description</p>
                      </div>
                      <span className="text-success ">In Stock</span>
                      <div className="pro-price">
                        <p className="orprice">$128.99</p>
                        <p className="Disprice">$100.99</p>
                      </div>
                      <Button className="addtocard">Add to card</Button>
                    </div>
                  </div>
                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src="https://nhatthienan.vn/wp-content/uploads/2016/11/keo-socola-miniature-hersheys-158kg-1m4G3-clNxlj-1.jpg"
                        alt=""
                        className="w-100"
                      />
                      <span className="badge ">28%</span>
                      <div className="actions">
                        <Button>
                          <AiOutlineFullscreen />
                        </Button>
                        <Button>
                          <CiHeart />
                        </Button>
                      </div>
                    </div>
                    <div className="title">
                      <Rating name="read-only" value={5} readOnly />
                      <div className="text-des">
                        <h4>Product Name</h4>
                        <p>description</p>
                      </div>
                      <span className="text-success ">In Stock</span>

                      <div className="pro-price">
                        <p className="orprice">$128.99</p>
                        <p className="Disprice">$100.99</p>
                      </div>
                      <Button className="addtocard">Add to card</Button>
                    </div>
                  </div>
                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src="https://costcofdb.com/wp-content/uploads/2022/01/hersheys-special-dark-minis-48-oz.jpg"
                        alt=""
                        className="w-100"
                      />
                      <span className="badge ">28%</span>
                      <div className="actions">
                        <Button>
                          <AiOutlineFullscreen />
                        </Button>
                        <Button>
                          <CiHeart />
                        </Button>
                      </div>
                    </div>
                    <div className="title">
                      <Rating name="read-only" value={5} readOnly />
                      <div className="text-des">
                        <h4>Product Name</h4>
                        <p>description</p>
                      </div>
                      <span className="text-success ">In Stock</span>

                      <div className="pro-price">
                        <p className="orprice">$128.99</p>
                        <p className="Disprice">$100.99</p>
                      </div>
                      <Button className="addtocard">Add to card</Button>
                    </div>
                  </div>
                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src="https://www.rationatmydoor.com/wp-content/uploads/2019/01/nescafe-coffee.jpg"
                        alt=""
                        className="w-100"
                      />
                      <span className="badge ">28%</span>
                      <div className="actions">
                        <Button>
                          <AiOutlineFullscreen />
                        </Button>
                        <Button>
                          <CiHeart />
                        </Button>
                      </div>
                    </div>
                    <div className="title">
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        precision={0.5}
                      />
                      <div className="text-des">
                        <h4>Product Name Product Name </h4>
                        <p>description</p>
                      </div>
                      <span className="text-success ">In Stock</span>

                      <div className="pro-price">
                        <p className="orprice">$128.99</p>
                        <p className="Disprice">$100.99</p>
                      </div>
                      <Button className="addtocard">Add to card</Button>
                    </div>
                  </div>
                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src="https://www.rationatmydoor.com/wp-content/uploads/2019/01/nescafe-coffee.jpg"
                        alt=""
                        className="w-100"
                      />
                      <span className="badge ">28%</span>
                      <div className="actions">
                        <Button>
                          <AiOutlineFullscreen />
                        </Button>
                        <Button>
                          <CiHeart />
                        </Button>
                      </div>
                    </div>
                    <div className="title">
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        precision={0.5}
                      />
                      <div className="text-des">
                        <h4>Product Name Product Name </h4>
                        <p>description</p>
                      </div>
                      <span className="text-success ">In Stock</span>

                      <div className="pro-price">
                        <p className="orprice">$128.99</p>
                        <p className="Disprice">$100.99</p>
                      </div>
                      <Button className="addtocard">Add to card</Button>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="product_row">
                <Slider {...ProductSlideOptions}>
                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src="https://media.premiumtimesng.com/wp-content/files/2021/10/Indomie.png"
                        alt=""
                        className="w-100"
                      />

                      <span className="badge ">28%</span>
                      <div className="actions">
                        <Button>
                          <AiOutlineFullscreen />
                        </Button>
                        <Button>
                          <CiHeart />
                        </Button>
                      </div>
                    </div>
                    <div className="title">
                      <Rating name="read-only" value={5} readOnly />
                      <div className="text-des">
                        <h4>Product Name</h4>
                        <p>description</p>
                      </div>
                      <span className="text-success ">In Stock</span>
                      <div className="pro-price">
                        <p className="orprice">$128.99</p>
                        <p className="Disprice">$100.99</p>
                      </div>
                      <Button className="addtocard">Add to card</Button>
                    </div>
                  </div>
                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src="https://nhatthienan.vn/wp-content/uploads/2016/11/keo-socola-miniature-hersheys-158kg-1m4G3-clNxlj-1.jpg"
                        alt=""
                        className="w-100"
                      />
                      <span className="badge ">28%</span>
                      <div className="actions">
                        <Button>
                          <AiOutlineFullscreen />
                        </Button>
                        <Button>
                          <CiHeart />
                        </Button>
                      </div>
                    </div>
                    <div className="title">
                      <Rating name="read-only" value={5} readOnly />
                      <div className="text-des">
                        <h4>Product Name</h4>
                        <p>description</p>
                      </div>
                      <span className="text-success ">In Stock</span>

                      <div className="pro-price">
                        <p className="orprice">$128.99</p>
                        <p className="Disprice">$100.99</p>
                      </div>
                      <Button className="addtocard">Add to card</Button>
                    </div>
                  </div>
                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src="https://costcofdb.com/wp-content/uploads/2022/01/hersheys-special-dark-minis-48-oz.jpg"
                        alt=""
                        className="w-100"
                      />
                      <span className="badge ">28%</span>
                      <div className="actions">
                        <Button>
                          <AiOutlineFullscreen />
                        </Button>
                        <Button>
                          <CiHeart />
                        </Button>
                      </div>
                    </div>
                    <div className="title">
                      <Rating name="read-only" value={5} readOnly />
                      <div className="text-des">
                        <h4>Product Name</h4>
                        <p>description</p>
                      </div>
                      <span className="text-success ">In Stock</span>

                      <div className="pro-price">
                        <p className="orprice">$128.99</p>
                        <p className="Disprice">$100.99</p>
                      </div>
                      <Button className="addtocard">Add to card</Button>
                    </div>
                  </div>
                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src="https://www.rationatmydoor.com/wp-content/uploads/2019/01/nescafe-coffee.jpg"
                        alt=""
                        className="w-100"
                      />
                      <span className="badge ">28%</span>
                      <div className="actions">
                        <Button>
                          <AiOutlineFullscreen />
                        </Button>
                        <Button>
                          <CiHeart />
                        </Button>
                      </div>
                    </div>
                    <div className="title">
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        precision={0.5}
                      />
                      <div className="text-des">
                        <h4>Product Name Product Name </h4>
                        <p>description</p>
                      </div>
                      <span className="text-success ">In Stock</span>

                      <div className="pro-price">
                        <p className="orprice">$128.99</p>
                        <p className="Disprice">$100.99</p>
                      </div>
                      <Button className="addtocard">Add to card</Button>
                    </div>
                  </div>
                  <div className="item productItem">
                    <div className="imgWrapper">
                      <img
                        src="https://www.rationatmydoor.com/wp-content/uploads/2019/01/nescafe-coffee.jpg"
                        alt=""
                        className="w-100"
                      />
                      <span className="badge ">28%</span>
                      <div className="actions">
                        <Button>
                          <AiOutlineFullscreen />
                        </Button>
                        <Button>
                          <CiHeart />
                        </Button>
                      </div>
                    </div>
                    <div className="title">
                      <Rating
                        name="read-only"
                        value={5}
                        readOnly
                        precision={0.5}
                      />
                      <div className="text-des">
                        <h4>Product Name Product Name </h4>
                        <p>description</p>
                      </div>
                      <span className="text-success ">In Stock</span>

                      <div className="pro-price">
                        <p className="orprice">$128.99</p>
                        <p className="Disprice">$100.99</p>
                      </div>
                      <Button className="addtocard">Add to card</Button>
                    </div>
                  </div>
                </Slider>
              </div>

              <div className="bannerSec d-flex mt-3">
                <div className="banner  w-100">
                  <img src={banner6} alt="" className="cursor" />
                </div>
                <div className="banner w-100 ">
                  <img src={banner5} alt="" className="cursor" />
                </div>
              </div>
            </div>
          </div>
          <div className="row mudole-1">
            <div className="col-md-2">
              <div className="first">
                <div className="first-image">
                  <img src={laycy} alt="" className="w-100" />
                </div>
                <div className="first-details mt-4">
                  <h6>lay spaicy crayfish</h6>
                  <p> 90 Item</p>
                </div>
              </div>
            </div>
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 ">
                  <div className="second">
                    <div className="second-image">
                      <img src={snack} alt="" className="w-100" />
                    </div>
                    <div className="second-details">
                      <h6>Biscuits & Snacks</h6>
                      <p> 90 Item</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="second">
                    <div className="second-image">
                      <img src={snack} alt="" className="w-100" />
                    </div>
                    <div className="second-details">
                      <h6>Breads & Bakery</h6>
                      <p> 90 Item</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="second">
                    <div className="second-image">
                      <img src={snack} alt="" className="w-100" />
                    </div>
                    <div className="second-details">
                      <h6>Breads & Bakery</h6>
                      <p> 90 Item</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="second">
                    <div className="second-image">
                      <img src={snack} alt="" className="w-100" />
                    </div>
                    <div className="second-details">
                      <h6>Breads & Bakery</h6>
                      <p> 90 Item</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 ">
                  <div className="second">
                    <div className="second-image">
                      <img src={snack} alt="" className="w-100" />
                    </div>
                    <div className="second-details">
                      <h6>Biscuits & Snacks</h6>
                      <p> 90 Item</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="second">
                    <div className="second-image">
                      <img src={snack} alt="" className="w-100" />
                    </div>
                    <div className="second-details">
                      <h6>Breads & Bakery</h6>
                      <p> 90 Item</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="second">
                    <div className="second-image">
                      <img src={snack} alt="" className="w-100" />
                    </div>
                    <div className="second-details">
                      <h6>Breads & Bakery</h6>
                      <p> 90 Item</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="second">
                    <div className="second-image">
                      <img src={snack} alt="" className="w-100" />
                    </div>
                    <div className="second-details">
                      <h6>Breads & Bakery</h6>
                      <p> 90 Item</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newSletter">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-light mb-0">$20 discount for your order</p>
              <h3 className="text-white mb-0 ">
                Join our newsletter and get..
              </h3>
              <p className="text-light">
                Join our email subscription now to get update <br /> on
                promotion and poupons
              </p>

              <form action="" className="subscibe">
                <IoMailOutline />
                <input type="text" placeholder="You email address" />
                <Button>Subscribe</Button>
              </form>
            </div>
            <div className="col-md-6 d-none d-md-flex ">
              <img src={newSletterImage} alt="" />
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Home;
