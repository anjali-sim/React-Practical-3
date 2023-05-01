import React from "react";
import Button from "../Button/Button";
import { AbsoluteBlock, RelativeBlock } from "../../styled/ButtonPosition";

// For adding the Plus(+) button at the bottom
function AddTodo() {
  return (
    <>
      <RelativeBlock>
        <AbsoluteBlock>
            <Button />
        </AbsoluteBlock>
      </RelativeBlock>
    </>
  );
}

export default AddTodo;
