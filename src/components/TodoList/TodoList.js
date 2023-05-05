import React, { useEffect, useRef, useState } from "react";
import Checkbox from "../CheckBox/Checkbox";
import { LIST } from "../../constants/constant";
import { Wrapper, Wrap } from "../../styled/TodoList";
import ButtonWrapper from "../ButtonWrapper/ButtonWrapper";
import lottie from "lottie-web";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TodoList() {
  // used useState hook to handle the checkbox
  const [isChecked, setIsChecked] = useState(LIST.map(() => false));
  const [todoItem, setTodoItem] = useState([]);

  // to check whether a particular list item is checked based on the id
  const handleCheck = (id) => {
    const newChecked = [...isChecked];
    newChecked[id] = !isChecked[id];
    setIsChecked(newChecked);

    if (!isChecked[id]) {
      // success toast notification
      toast.success("Task Completed!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      // information toast notification
      toast.info("Task Incomplete!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
            const style = {
              color: isChecked[id] ? "lightgrey" : "black",
            };
            return (
              <div className="list-items-body" key={id}>
                {/* For displaying the list items */}
                <div className="list-item">
                  <p
                    className="list-style"
                    style={style}
                    onClick={() => handleCheck(id)}
                  >
                    {item}
                  </p>
                </div>
                {/* For displaying the checkboxes */}
                <div className="list-check">
                  <Checkbox handleCheck={() => handleCheck(id)} id={id} />
                </div>
              </div>
            );
          })
        )}
        <ButtonWrapper setTodoItem={setTodoItem} />
      </Wrapper>
    </Wrap>
  );
}

export default TodoList;
