import React from 'react'
import {InputStyle} from '../../styled/InputStyle'

function Input(props) {
  return (
    <>
          <InputStyle type="text" value={props.value} onChange={props.onChange}></InputStyle>
    </>
  )
}

export default Input