import React from "react";
import { InputCheckBox } from "../../styled/InputCheckBox";

function InputCheckbox(props) {
  const   {handleCheck,index} = props;
  return (
    <div>
      <InputCheckBox
        type="checkbox"
        className="checkBox"
        onChange={() => handleCheck(index)}
      />
    </div>
  );
}

export default InputCheckbox;
