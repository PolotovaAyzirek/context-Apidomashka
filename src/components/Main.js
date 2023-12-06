
import React from 'react'
import Form from './Form'

const Main = (context) => {
  return (
    <div style={{height:"300px",border:"2px solid",background: context.color ||"red"}}>
      <Form color={context.color}/>
    </div>
  )
}

export default Main
