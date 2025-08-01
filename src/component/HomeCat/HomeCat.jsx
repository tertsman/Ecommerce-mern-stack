import Slider from "react-slick";
import { useEffect, useState } from "react";
import { getData } from "../../util/api";
import { Link } from "react-router-dom";
import {motion} from"framer-motion"
const HomeCat = () => {
  // const Category = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 10,
  //   slidesToScroll: 5,
  //   loop: true,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   responsive: [
  //   {
  //     breakpoint: 1200,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 1008,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 800,
  //     settings: 'unslick',
  //   },
  // ],
  // };


  const Category = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 9,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

  const [itemBg, setItemBg] = useState([

  ]);

  useEffect(() => {
      getData("/category")
        .then((res) => setItemBg(res))
        .catch((err) => console.error(err));
    }, []);
  return (
    <motion.section 
     initial={{top:20,opacity:0,scale:0.7}}
     whileInView={{top:0,opacity:1,scale:1}}
     transition={{duration:2}}
    className="homeCat">
      <div className="container">
        <div className="featuredCat">
          <h2>Featured Categories</h2>
        </div>
        <Slider {...Category}>
          {itemBg?.map((item, index) => {
            return (
              <div className="test" key={index}>
                <div className="item" style={{background:item.color}}>
                  <div className="imgWrapper">
                    <img src={item.images && item.images.length > 0 ? item.images[0] : "https://cdn-icons-png.flaticon.com/512/10786/10786217.png"}
            alt={item.name} className="w-100" />
                  </div>
                  <div className="cattitle">
                    {/* <h4>{item.name}</h4> */}
                     <Link to={`/cat/${item._id}`} className="text-decoration-none">
                                      {item.name}
                                    </Link>
                    
                  </div>
                </div>
              </div>
            );
          })}
          
        </Slider>
      </div>
    </motion.section>
  );
};

export default HomeCat;
