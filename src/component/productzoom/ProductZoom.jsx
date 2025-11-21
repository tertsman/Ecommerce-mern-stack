/* eslint-disable react/prop-types */
import { useRef } from "react";

// import cofe1 from "../../assets/Banner/coffe1.jpg";

import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
const ProductZoom = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
  };
  const setting2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();

  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };

  // console.log("data props",props.data)
  // alert(props.data)
  return (
    <div>
      <div className="productZoom">
        <div className="fly-item">
          <div className="badge dis bg-info">23%</div>
          <div className="badge rec bg-secondary">Recommended</div>
        </div>
        <Slider {...settings} className="zoomSliderBig" ref={zoomSliderBig}>
          
            {props.data.images?.map((item,index)=>(
            <div className="item" key={index}>
            <InnerImageZoom
              src={item}
              zoomSrc={item}
              zoomType="hover"
              zoomScale={1}
            />
            
          </div>
            ))}
            
        </Slider>
      </div>
      <Slider {...setting2} className="zoomSlider" ref={zoomSlider}>
        {
          props.data.images?.map((item1,index)=>(
            <div className="item" key={index}>
          <img src={item1} alt="" className="w-100" onClick={() => goto(index)} />
        </div>
          ))
        }
       
      </Slider>
    </div>
  );
};

export default ProductZoom;
