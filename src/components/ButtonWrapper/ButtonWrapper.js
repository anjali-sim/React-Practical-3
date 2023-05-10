import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../InputText/Input";
import { AbsolutePosition, RelativePosition } from "../../styled/ButtonWrapper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  loadItemsFromLocalStorage,
  saveItemsToLocalStorage,
  removeItemsFromLocalStorage,
  getCurrentDate,
} from "../../services/storageService";

function ButtonWrapper(props) {
  // used state to handle input text
  const [input, setInput] = useState("");
  // used state to show the input based on the condition to show button or input text field
  const [showInput, setShowInput] = useState(false);
  // used state to store the items in the array
  const [items, setItems] = useState([]);
  // used state to set font size in the input text field
  const [fontSize, setFontSize] = useState(16);

  // load items from local storage from services
  uuseEffect(() => {
    const todoListItems = loadItemsFromLocalStorage("todoListItems");
    const storedDate = localStorage.getItem("todoListDate");
    const currentDate = getCurrentDate();

    if (todoListItems && storedDate === currentDate) {
      setItems(todoListItems);
      props.setTodoItem(todoListItems);
    } else {
      removeItemsFromLocalStorage("todoListItems");
      removeItemsFromLocalStorage("todoListDate");
    }
  }, [props.todoListItems]);

  // handle the 'Escape' key to hide the input field
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

  // handle button click to show the input field
  const handleButton = (event) => {
    setShowInput(true);
  };

  // store list items in the local storage from services
  useEffect(() => {
    if (items.length !== 0) {
      saveItemsToLocalStorage("todoListItems", items);
      saveItemsToLocalStorage("todoListDate", getCurrentDate());
    }
  }, [items]);

  // handle input change and submission of it
  const handleOnInput = (event) => {
    const value = event.target.value;
    if (event.key === "Enter" && value) {
      const updatedItems = [...items, value];
      setItems(updatedItems);
      setInput("");
      setShowInput(false);
      saveItemsToLocalStorage("todoListItems", updatedItems);
      saveItemsToLocalStorage("todoListDate", getCurrentDate());
      props.setTodoItem(updatedItems);
      // success toast notification
      toast.success("Task Added Successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (event.key === "Enter") {
      // error toast notification
      toast.error("Please Enter Something!", {
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
      setInput(value);
    }

    // For setting the font size based on the length
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
          {/* Conditional rendering to show input text field and button */}
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
