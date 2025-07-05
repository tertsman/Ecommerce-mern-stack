import React from "react";
import Product from "../../../component/Product/Product";
import Slider from "react-slick";
const RelateProduct = (props) => {
  const ProductSlideOptions = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    loop: true,
     
  };

  return (
    <>
      <section className="section Relate_product mb-5 ">
        <div className="d-flex align-items-center productRow">
          <div className="info mb-0">
            <h5 className="hd">{props.title}</h5>
          </div>
        </div>
        <div className="slider-container">
          <Slider {...ProductSlideOptions}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Slider>
        </div>
      </section>
    </>
  );
};

export default RelateProduct;
