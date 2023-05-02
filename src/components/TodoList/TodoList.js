import React, { useState } from "react";
import Checkbox from "../Input/Checkbox";
import { DUMMY_LIST } from "../../constants/constant";
import { Wrapper } from "../../styled/TodoList";

function TodoList() {
    
  //used useState hook to handle the checkbox
  const [isChecked, setIsChecked] = useState(DUMMY_LIST.map(() => false));

  const handleCheck = (index) => {
    const newChecked = [...isChecked];
    newChecked[index] = !isChecked[index];
    setIsChecked(newChecked);
  };

  return (
    <Wrapper>
      {/* Display style according to the checkbox whether it is checked or not */}
      {DUMMY_LIST.map((item, index) => {
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
              <Checkbox handleCheck={()=>handleCheck(index)}  index={index}/>
            </div>
          </div>
          
        );
      })}
    </Wrapper>

  );
}

export default TodoList;
