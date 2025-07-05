
import Slider from "react-slick";

const HomerBanner = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        loop:true,
        autoplay: true,
        autoplaySpeed: 2000
        
      };
  return (
    
      <div className="homeBannerSection ">
        <Slider {...settings}>
            <div className="item" >
                    <img src="https://web.larue.com.kh/image/vcache/home/slide/web_3081735801792.webp" alt="" className="w-100" />
            </div>
            <div className="item" >
                    <img src="https://web.larue.com.kh/image/vcache/home/slide/web_2061738553400.webp" alt="" className="w-100" />
            </div>
            <div className="item" >
                    <img src="https://web.larue.com.kh/image/vcache/home/slide/web_2461735804072.webp" alt="" className="w-100" />
            </div>
            <div className="item" >
                    <img src="https://web.larue.com.kh/image/vcache/home/slide/web_3131738553439.webp" alt="" className="w-100" />
            </div>
            <div className="item" >
                    <img src="https://i.pinimg.com/736x/ed/cd/32/edcd32b829a5c6e614a6d6383c562742.jpg" alt="" className="w-100" />
            </div>
        </Slider>
      </div>
    
  )
}

export default HomerBanner
