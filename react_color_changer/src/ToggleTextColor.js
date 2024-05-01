import React from "react"
import './App.css'
const ToggleTextColor = ({text,setText}) => {
  return (
   
        <button className="btn" onClick={ text===1? setText(0):setText(1)}>Toggle Text Color</button>
   
  )
}

export default ToggleTextColor