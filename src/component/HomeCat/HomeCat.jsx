import Slider from "react-slick";
import { useEffect, useState } from "react";
import { getData } from "../../util/api";
const HomeCat = () => {
  const Category = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
    loop: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const [itemBg, setItemBg] = useState([

  ]);

  useEffect(() => {
      // Example: Fetch all categories
      getData("/category")
        .then((res) => setItemBg(res))
        .catch((err) => console.error(err));
    }, []);
  return (
    <section className="homeCat">
      <div className="container">
        <div className="featuredCat">
          <h2>Featured Categories</h2>
        </div>
        <Slider {...Category}>
          {itemBg?.map((item, index) => {
            return (
              <div className="test" key={index}>
                <div className="item productItem" style={{background:item.color}}>
                  <div className="imgWrapper">
                    <img src={item.images && item.images.length > 0 ? item.images[0] : "https://cdn-icons-png.flaticon.com/512/10786/10786217.png"}
            alt={item.name} className="w-100" />
                  </div>
                  <div className="cattitle">
                    <h4>{item.name}</h4>
                    
                  </div>
                </div>
              </div>
            );
          })}
          
        </Slider>
      </div>
    </section>
  );
};

export default HomeCat;
