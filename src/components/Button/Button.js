import React, { useState } from 'react'
import {AddButton} from '../../styled/Button';

function Button(props) {
  return (
    <>
    <AddButton onClick={props.onClick}>+</AddButton>
    </>
  )
}

export default Button;