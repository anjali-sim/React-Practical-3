import React from "react";
import { CheckBox } from "../../styled/CheckBox";

// function for checkbox that is used in another component
function Checkbox(props) {
  const { handleCheck, id } = props;
  return (
    <CheckBox
      type="checkbox"
      className="checkBox"
      onChange={() => handleCheck(id)}
    />
  );
}

export default Checkbox;
