import React from "react";
import { InputStyle } from "../../styled/InputStyle";

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

export default Input;
