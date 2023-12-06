
import React from 'react'

const Header = (context) => {
    const color="black"
  return (
    <div style={{height:"100px",border:"2px solid",background: context.color || "yellow"}}>
      
    </div>
  )
}

export default Header
