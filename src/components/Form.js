
import React from 'react'

const Form = (context) => {
  return (
    <div style={{boxShadow:  "0px 0px 10px 10px",background: context.color ||"white"}}>
        <h1>FORM</h1>
        <input type='text'></input>
        <input type='text'></input>
        <input type='text'></input>

    </div>
  )
}

export default Form
