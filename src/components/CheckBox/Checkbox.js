import React from "react";
import { CheckBox } from "../../styled/CheckBox";

// function for checkbox that is used in another component
function Checkbox(props) {
  const { onChange } = props;
  return (
    <CheckBox
      type="checkbox"
      className="checkBox"
      onChange={() => onChange()}
    />
  );
}

export default Checkbox;
