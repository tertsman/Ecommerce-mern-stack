import HomerBanner from "../../component/homeBanner/HomerBanner";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Slider from "react-slick";
import newSletterImage from "../../assets/Banner/coupon.webp";
import { IoMailOutline } from "react-icons/io5";
import HomeCat from "../../component/HomeCat/HomeCat";
import Product from "../../component/Product/Product";
import { useContext, useEffect, useState } from "react";
import { getData } from "../../util/api";
import { MyContext } from "../../App";
import { motion } from "framer-motion";

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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [product, setProduct] = useState([]);
  const context = useContext(MyContext);
  const [homeBanner, setHomeBanner] = useState([]);
  const [bannerBottom, setBannerBottom] = useState();

  const getProduct = async (filterKey = null) => {
    try {
      const url = filterKey ? `/product/?isFeatured=${filterKey}` : "/product";
      const res = await getData(url);
      if (Array.isArray(res)) {
        const formatted = res.map((item) => ({
          id: item._id,
          images: item.images?.[0], // ✅ Use first image
          name: item.name,
          description: item.description,
          category: item.category?.name || "N/A",
          brand: item.brand,
          oldPrice: item.oldPrice,
          price: item.price,
          countInStock: item.countInStock,
          rating: item.rating,
          isFeatured: item.isFeatured,
          colors: item.colors,
          weights: item.weights,
          sizes: item.sizes,
          // sizes : item.sizes,
        }));
        setProduct(formatted);
        // console.log("Formatted rows:", formatted);
      } else {
        console.error("Error loading products", res);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  const getBannerBottom = async () => {
    const res = await getData("/bannerButtom");
    setBannerBottom(res);
  };
  // console.log("product ",product)

  useEffect(() => {
    getProduct(); // all
    getProduct("true");
    // isFeatured
    context.setisHeaderFooterShow(true);
    getHomeBanner();
    getBannerBottom();
  }, []);

  const getHomeBanner = async () => {
    const res = await getData("/homeBanner");
    setHomeBanner(res);
    // console.log(res)
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
            <div className="col-md-12 overflow-hidden">
              <div className="row">
                <motion.div
                  initial={{ opacity: 0, translateX: "-100%" }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  transition={{ duration: 1 }}
                  className="col-md-3"
                >
                  <div className="sticky">
                    <div className="banner">
                      <img src={homeBanner?.[0]?.image} alt="Banner" />
                    </div>
                  </div>
                </motion.div>
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
                  <motion.div
                    initial={{ opacity: 0, translateX: "100%" }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 2 }}
                    className="product_row overflow-hidden"
                  >
                    <Slider {...ProductSlideOptions}>
                      {product
                        .filter((item) => item.isFeatured === true)
                        .map((item, index) => (
                          <Product
                            key={item.id || index}
                            item={item}
                            itemView="grid"
                          />
                        ))}
                    </Slider>
                  </motion.div>
                </div>
              </div>
              {/* <div className="sticky">
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

                
              </div> */}
            </div>

            <div className="col-md-12">
              {/* <div className="d-flex align-items-center productRow">
                <div className="info mb-0">
                  <h5 className="hd">BEST SELLER</h5>
                  <p className=" text-light text-sml ">
                    Do not miss the current offers until the end of mach.
                  </p>
                </div>
                <Button className="viewAll">
                  View All &nbsp; <IoIosArrowRoundForward />
                </Button>
              </div> */}
              {/* <div className="product_row">
                <Slider {...ProductSlideOptions}>
                  
                  {product
                    .filter((item) => item.isFeatured === true)
                    .map((item, index) => (
                      <Product
                        key={item.id || index}
                        item={item}
                        itemView="grid"
                      />
                    ))}
                </Slider>
              </div> */}
              <div className="row"></div>
              <div className="bannerMiddl d-flex align-items-center productRow mt-4 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, translateY: "100%" }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 2 }}
                  className="banner w-100"
                ></motion.div>
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
              <div className="w-100">
                <div className="newProductGrid">
                  {product.map((item, index) => (
                    <div key={item.id || index}>
                      <Product item={item} itemView="grid" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bannerSec d-flex mt-3">
                {bannerBottom?.length !== 0 &&
                  bannerBottom?.map((item, index) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, translateY: "50%" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        transition={{ duration: 2 }}
                        className="banner"
                        key={index}
                      >
                        <img src={item.image} alt="" className="cursor" />
                      </motion.div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        
        className="newSletter overflow-hidden"
      >
        <motion.div
        initial={{ opacity: 0, translateX: "50%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 2 }}
        className="container">
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
        </motion.div>
      </section>
    </>
  );
};

export default Home;
