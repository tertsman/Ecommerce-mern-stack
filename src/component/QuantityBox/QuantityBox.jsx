import { Button } from "@mui/material";
import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

const QuantityBox = () => {
  const [inputValue, setinputValue] = useState(1);

  const minus = () => {
    if (inputValue !== 1) {
      setinputValue(inputValue - 1);
    }
  };
  const plus = () => {
    setinputValue(inputValue + 1);
  };
  return (
    <div className="quantity">
      <Button className=" quantity-btn minus" onClick={minus}>
        <FaMinus />
      </Button>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          const value = e.target.value;

          if (!isNaN(value) && value !== "") {
            setinputValue(parseInt(value, 10));
          }
        }}
      />
      <Button className="plus quantity-btn" onClick={plus}>
        <FiPlus />
      </Button>
    </div>
  );
};

export default QuantityBox;
