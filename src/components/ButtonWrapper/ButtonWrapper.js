import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../InputText/Input";
import { AbsolutePosition, RelativePosition } from "../../styled/ButtonWrapper";

// For adding the Plus(+) button at the bottom
function ButtonWrapper(props) {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [fontSize, setFontSize] = useState(16);

  // Handle the "Escape" key to hide the input field
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && showInput) {
        setShowInput(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showInput]);

  // Handle button click to show the input field
  const handleButton = (event) => {
    setShowInput(true);
  };

  // For storing the list items in local storage
  useEffect(() => {
    if (items.length !== 0) {
      localStorage.setItem("todoListItems", JSON.stringify(items));
      localStorage.setItem("todoListDate", new Date().toLocaleDateString());
    }
  }, [items]);

  // Handle input change and submission
  const handleOnInput = (event) => {
    const value = event.target.value;
    if (event.key === "Enter" && value) {
      const updatedItems = [...items, value];
      setItems(updatedItems);
      setInput("");
      setShowInput(false);
      localStorage.setItem("todoListItems", JSON.stringify(updatedItems));
      localStorage.setItem("todoListDate", new Date().toLocaleDateString());
      props.setTodoItem(updatedItems);
    } else if (event.key === "Enter") {
      alert("Please Enter Something!");
    } else {
      setInput(value);
    }

    const valueLength = event.target.value.length;
    if (valueLength > 10) {
      setFontSize(12);
    } else {
      setFontSize(16);
    }
  };

  return (
    <>
      <RelativePosition>
        <AbsolutePosition>
          {showInput ? (
            <Input
              type="text"
              value={input}
              onChange={handleOnInput}
              fontSize={fontSize}
            />
          ) : (
            <Button onClick={handleButton} />
          )}
        </AbsolutePosition>
      </RelativePosition>
    </>
  );
}

export default ButtonWrapper;
