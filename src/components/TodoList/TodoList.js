import React, { useState } from "react";
import InputCheckbox from "../InputCheckBox/InputCheckbox";
import { dummyList } from "../../constants/dummyText";
import { Wrapper } from "../../styled/TodoList";

function TodoList() {
    
  //used useState hook to handle the checkbox
  const [isChecked, setIsChecked] = useState(dummyList.map(() => false));

  const handleCheck = (index) => {
    const newChecked = [...isChecked];
    newChecked[index] = !isChecked[index];
    setIsChecked(newChecked);
  };

  return (
    <Wrapper>
      {/* Display style according to the checkbox whether it is checked or not */}
      {dummyList.map((item, index) => {
        const style = {
          color: isChecked[index] ? "lightgrey" : "black",
        };
        return (
          <div className="list-items-body" key={index}>
            {/* For displaying the list items */}
            <div className="list-item">
              <p className="list-style" style={style} onClick={() => handleCheck(index)}>
                {item}
              </p>
            </div>
            {/* For displaying the checkboxes */}
            <div className="list-check">
              <InputCheckbox handleCheck={()=>handleCheck(index)}  index={index}/>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default TodoList;
