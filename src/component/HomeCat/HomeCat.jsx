import Slider from "react-slick";
import Button from "@mui/material/Button";
import redApple from "../../assets/Banner/catApple.jpg";
import snacks from "../../assets/Banner/snack.png";
import oganic from "../../assets/Banner/oganic.png";
import headphone from "../../assets/Banner/headphone.jpg";
import custard from "../../assets/Banner/custardapple.jpg";
import Cofe from "../../assets/Banner/cofe&tea.jpg";
import cake from "../../assets/Banner/cake.jpg";
import blueBerry from "../../assets/Banner/blueberry.jpg";
import strawberry from "../../assets/Banner/strawberry.jpg";
import vigetable from "../../assets/Banner/vigetable.jpg";
import { useState } from "react";
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
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#fff3eb",
  ]);
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
                <div className="item productItem" style={{background:item}}>
                  <div className="imgWrapper">
                    <img src={redApple} alt="" className="w-100" />
                  </div>
                  <div className="cattitle">
                    <h4>Red Appl</h4>
                    <p>54 Items</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="test">
            <div className="item productItem">
              <div className="imgWrapper">
                <img src={redApple} alt="" className="w-100" />
              </div>
              <div className="cattitle">
                <h4>Red Appl</h4>
                <p>54 Items</p>
              </div>
            </div>
          </div>
          <div className="test">
            <div className="item productItem">
              <div className="imgWrapper">
                <img src={snacks} alt="" className="w-100" />
              </div>
              <div className="cattitle">
                <h4>Snacks</h4>
                <p>54 Items</p>
              </div>
            </div>
          </div>
          <div className="test">
            <div className="item productItem">
              <div className="imgWrapper">
                <img src={vigetable} alt="" className="w-100" />
              </div>
              <div className="cattitle">
                <h4>Vigetable</h4>
                <p>74 Items</p>
              </div>
            </div>
          </div>
          <div className="test">
            <div className="item productItem">
              <div className="imgWrapper">
                <img src={strawberry} alt="" className="w-100" />
              </div>
              <div className="cattitle">
                <h4>Strawberry</h4>
                <p>36 Items</p>
              </div>
            </div>
          </div>
          <div className="test">
            <div className="item productItem">
              <div className="imgWrapper">
                <img src={blueBerry} alt="" className="w-100" />
              </div>
              <div className="cattitle">
                <h4>BlueBerry</h4>
                <p>54 Items</p>
              </div>
            </div>
          </div>
          <div className="test">
            <div className="item productItem">
              <div className="imgWrapper">
                <img src={custard} alt="" className="w-100" />
              </div>
              <div className="cattitle">
                <h4>Custard apple</h4>
                <p>84 Items</p>
              </div>
            </div>
          </div>
          <div className="test">
            <div className="item productItem">
              <div className="imgWrapper">
                <img src={Cofe} alt="" className="w-100" />
              </div>
              <div className="cattitle">
                <h4>Coffe & Tea</h4>
                <p>24 Items</p>
              </div>
            </div>
          </div>
          <div className="test">
            <div className="item productItem">
              <div className="imgWrapper">
                <img src={headphone} alt="" className="w-100" />
              </div>
              <div className="cattitle">
                <h4>Headphone</h4>
                <p>87 Items</p>
              </div>
            </div>
          </div>
          <div className="test">
            <div className="item productItem">
              <div className="imgWrapper">
                <img src={cake} alt="" className="w-100" />
              </div>
              <div className="cattitle">
                <h4>Cake & Milk</h4>
                <p>24 Items</p>
              </div>
            </div>
          </div>
          <div className="test">
            <div className="item productItem">
              <div className="imgWrapper">
                <img src={oganic} alt="" className="w-100" />
              </div>
              <div className="cattitle">
                <h4>Oganic Kiwi</h4>
                <p>24 Items</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default HomeCat;
