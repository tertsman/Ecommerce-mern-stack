/* eslint-disable react/prop-types */
import Product from "../../../component/Product/Product";
// import Slider from "react-slick";
const RelateProduct = (props) => {
  console.log("reslets",props.data)
  return (
    <>
      <section className="section Relate_product mb-5 ">
        <div className="d-flex align-items-center productRow">
          <div className="info mb-0">
            <h5 className="hd">{props.title}</h5>
          </div>
        </div>
        <div className="relateProduct">


          
            {
              props.data?.map((item) => <Product item={item} key={item._id}/>)
            }
           
          
        </div>
      </section>
    </>
  );
};

export default RelateProduct;
