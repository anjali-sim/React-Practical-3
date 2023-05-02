import React from "react";
import { CheckBox } from "../../styled/CheckBox";

function Checkbox(props) {
  const   {handleCheck,index} = props;
  return (
    <>
      <CheckBox
        type="checkbox"
        className="checkBox"
        onChange={() => handleCheck(index)}
      />
    </>
  );
}

export default Checkbox;
