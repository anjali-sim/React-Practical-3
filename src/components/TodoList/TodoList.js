import React, { useEffect, useRef, useState } from "react";
import Checkbox from "../CheckBox/Checkbox";
import { LIST } from "../../constants/constant";
import { Wrapper, Wrap } from "../../styled/TodoList";
import ButtonWrapper from "../ButtonWrapper/ButtonWrapper";
import lottie from "lottie-web";
import { showInformationToast, showSuccessToast } from "../../utils/toast";
import { ListCheck } from "../../styled/CheckBox";

function TodoList() {
  const [todoState, setTodoState] = useState({
    isChecked: LIST.map(() => false),
    todoItem: [],
  });

  const { isChecked, todoItem } = todoState;

  // to check whether a particular list item is checked based on the id
  const handleCheck = (id) => {
    const newChecked = [...isChecked];
    newChecked[id] = !isChecked[id];
    setTodoState({
      ...todoState,
      isChecked: newChecked,
    });

    if (!isChecked[id]) {
      // success toast notification
      showSuccessToast("Task Completed!");
    } else {
      // information toast notification
      showInformationToast("Task Incomplete!");
    }
  };

  // for handling lottie animation
  const lottieContainer = useRef(null);
  const animationInstance = useRef(null);
  // handle lottie animation to show empty list
  useEffect(() => {
    animationInstance.current = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../assets/images/empty.json"),
    });
    // Return clean up function here
    return () => animationInstance.current.destroy();
  }, []);

  return (
    <Wrap>
      <Wrapper>
        {/* Display style according to the checkbox whether it is checked or not */}
        {todoItem.length === 0 ? (
          <div className="container" ref={lottieContainer} />
        ) : (
          todoItem.map((item, id) => {
            return (
              <div className="list-items-body" key={id}>
                {/* For displaying the list items */}
                <div className="list-item">
                  <ListCheck
                    isChecked={isChecked[id]}
                    onClick={() => handleCheck(id)}
                  >
                    {item}
                  </ListCheck>
                </div>
                {/* For displaying the checkboxes */}
                <div className="list-check">
                  <Checkbox onChange={() => handleCheck(id)} />
                </div>
              </div>
            );
          })
        )}
        <ButtonWrapper
          setTodoItem={(items) =>
            setTodoState({ ...todoState, todoItem: items })
          }
        />
      </Wrapper>
    </Wrap>
  );
}

export default TodoList;
