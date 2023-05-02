import React from "react";
import Button from "../Button/Button";
import { AbsolutePosition, RelativePosition } from "../../styled/ButtonWrapper";

// For adding the Plus(+) button at the bottom
function ButtonWrapper() {

  return (
    <>
      <RelativePosition>
        <AbsolutePosition>
          <Button />
        </AbsolutePosition>
      </RelativePosition>
    </>
  );
}

export default ButtonWrapper;
