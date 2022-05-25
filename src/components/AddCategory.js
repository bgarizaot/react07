import React, { useState } from "react";
// import PropTypes from "prop-types";

export const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategorias((cat) => [inputValue, ...cat]);
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </form>
    </>
  );
};

// AddCategory.prototype = {
//   setCategorias: PropTypes.func.isRequired,
// };
