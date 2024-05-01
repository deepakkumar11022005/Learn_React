import React from "react"
import './App.css'
const ColorInput = ({color1,handleColorInput}) => {
  return (
     <form onSubmit={(e)=>e.preventDefault()}  >
          <input
           type="text" 
           placeholder="Enter a color"
           className="input"
           value={color1}
           onChange={(e)=>handleColorInput(e)}

            />
     </form>
  )
}

export default ColorInput