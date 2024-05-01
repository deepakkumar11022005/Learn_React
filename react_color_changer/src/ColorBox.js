import React from "react"
import './App.css'
const ColorBox = ({font,text}) => {
  return (
    <div className="colorBox" style={{backgroundColor:`${font}`}}>
            
              <h3 className={text===1? "hexCode" :''}>{font}</h3>
    </div>
  )
}
 
export default ColorBox