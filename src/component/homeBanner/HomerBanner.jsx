import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getData } from "../../util/api";
import {motion} from 'framer-motion'
const HomerBanner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const [slideBannerList, setSlideBannerList] = useState();

  const getSlideBanner = async () => {
    const res = await getData("/slideBanner");
    setSlideBannerList(res);
  };

  useEffect(() => {
    getSlideBanner();
  });
  return (
    <motion.div 
    initial={{opacity:0,scale:0.8}}
    whileInView={{opacity:1,scale:1}}
    transition={{duration:2}}
    className="homeBannerSection ">
      <Slider {...settings}>
        {slideBannerList?.length !== 0 &&
          slideBannerList?.map((item, index) => {
            return (
              <div className="item" key={index}>
                <img
                  src={item.image}
                  alt={item.image}
                  className="w-100"
                />
              </div>
            );
          })}
        
      </Slider>
    </motion.div>
  );
};

export default HomerBanner;
