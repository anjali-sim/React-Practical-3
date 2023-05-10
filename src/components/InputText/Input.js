import React from "react";
import { InputStyle } from "../../styled/InputStyle";
import PropTypes from "prop-types";

// function for input text field using its styled component
function Input(props) {
  const { fontSize, value, onChange } = props;
  return (
    <>
      <InputStyle
        type="text"
        placeholder="Enter task"
        fontSize={fontSize}
        value={value}
        onChange={onChange}
        onKeyDown={onChange}
      ></InputStyle>
    </>
  );
}

Input.propTypes = {
  fontSize: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
