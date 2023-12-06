import React, { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App  (){
  const [color,setColor]=useState("")        //globalstate
  const selectHandler=(e)=>{
  console.log(e.target)
   setColor(e.target.value)
  }
  return (
    <div className='App'>
      <select onChange={selectHandler} name=""id="">
        <option value="black">black</option>
        <option value="yellow">yellow</option>
        <option value="red">red</option>


      </select>
      <Header color={color}/>
      <Main color={color}/>
      <Footer color={color}/>
    </div>
  )
}

export default App
