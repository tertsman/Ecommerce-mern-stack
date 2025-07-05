
import { useRef } from 'react';
import cofe from "../../assets/Banner/coffe.jpg";
import cofe1 from "../../assets/Banner/coffe1.jpg";
import cofe2 from "../../assets/Banner/coffe2.jpg";
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
const ProductZoom = () => {

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
  return (
    <div >
       <div className="productZoom">
              <div className="fly-item">
                <div className="badge dis bg-info">23%</div>
                <div className="badge rec bg-secondary">Recommended</div>
              </div>
              <Slider
                {...settings}
                className="zoomSliderBig"
                ref={zoomSliderBig}
              >
                <div className="item">
                  <InnerImageZoom
                    src={cofe}
                    zoomSrc={cofe}
                    zoomType="hover"
                    zoomScale={1}
                  />
                  {/* <img src={cofe} alt="" className="w-100" /> */}
                </div>
                <div className="item">
                  <InnerImageZoom
                    src={cofe1}
                    zoomSrc={cofe1}
                    zoomType="hover"
                    zoomScale={1}
                  />
                  {/* <img src={cofe} alt="" className="w-100" /> */}
                </div>
                <div className="item">
                  <InnerImageZoom
                    src={cofe2}
                    zoomSrc={cofe2}
                    zoomType="hover"
                    zoomScale={1}
                  />
                  {/* <img src={cofe} alt="" className="w-100" /> */}
                </div>
              </Slider>
            </div>
            <Slider {...setting2} className="zoomSlider" ref={zoomSlider}>
              <div className="item">
                {/* <InnerImageZoom src={cofe} zoomSrc={cofe} onClick={()=>goto(1)} /> */}
                <img
                  src={cofe}
                  alt=""
                  className="w-100"
                  onClick={() => goto(0)}
                />
              </div>
              <div className="item">
                {/* <InnerImageZoom src={cofe} zoomSrc={cofe} onClick={()=>goto(2)} /> */}
                <img
                  src={cofe1}
                  alt=""
                  className="w-100"
                  onClick={() => goto(1)}
                />
              </div>
              <div className="item">
                {/* <InnerImageZoom src={cofe} zoomSrc={cofe}  /> */}
                <img
                  src={cofe2}
                  alt=""
                  className="w-100"
                  onClick={() => goto(2)}
                />
              </div>
            </Slider>
    </div>
  )
}

export default ProductZoom
