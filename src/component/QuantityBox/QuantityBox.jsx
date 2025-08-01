// /* eslint-disable react/prop-types */
// import { Button } from "@mui/material";
// import { useEffect, useState } from "react";
// import { FaMinus } from "react-icons/fa6";
// import { FiPlus } from "react-icons/fi";

// const QuantityBox = (props) => {
//   const [inputValue, setinputValue] = useState(1);

//   const minus = () => {
//     if (inputValue !== 1) {
//       setinputValue(inputValue - 1);
//     }
//   };
//   const plus = () => {
//     setinputValue(inputValue + 1);
//   };

//   useEffect(()=>{
//   props.quantity(inputValue)
//   },[inputValue])
//   return (
//     <div className="quantity">
//       <Button className=" quantity-btn minus" onClick={minus}>
//         <FaMinus />
//       </Button>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => {
//           const value = e.target.value;

//           if (!isNaN(value) && value !== "") {
//             setinputValue(parseInt(value, 10));
//           }
//         }}
//       />
//       <Button className="plus quantity-btn" onClick={plus}>
//         <FiPlus />
//       </Button>
//     </div>
//   );
// };

// export default QuantityBox;

/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

const QuantityBox = ({ quantity, defaultValue = 1 }) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const minus = () => {
    if (inputValue > 1) {
      const newVal = inputValue - 1;
      setInputValue(newVal);
    }
  };

  const plus = () => {
    const newVal = inputValue + 1;
    setInputValue(newVal);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed) && parsed >= 1) {
      setInputValue(parsed);
    }
  };

  useEffect(() => {
    if (typeof quantity === "function") {
      quantity(inputValue);
    }
  }, [inputValue]);

  return (
    <div className="quantity d-flex align-items-center">
      <Button className="quantity-btn minus" onClick={minus}>
        <FaMinus />
      </Button>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        style={{ width: "50px", textAlign: "center" }}
      />
      <Button className="plus quantity-btn" onClick={plus}>
        <FiPlus />
      </Button>
    </div>
  );
};

export default QuantityBox;

