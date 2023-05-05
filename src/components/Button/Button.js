import React from "react";
import { AddButton } from "../../styled/Button";
import PropTypes from "prop-types";

function Button(props) {
  const { onClick } = props;
  return (
    <>
      <AddButton onClick={onClick}>+</AddButton>
    </>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
