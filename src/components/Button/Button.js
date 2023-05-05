import React from "react";
import { AddButton } from "../../styled/Button";

function Button(props) {
  const { onClick } = props;
  return (
    <>
      <AddButton onClick={onClick}>+</AddButton>
    </>
  );
}

export default Button;
