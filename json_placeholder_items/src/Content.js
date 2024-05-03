import React from "react"
import './App.css'
const Content = ({content}) => {
  return (
    <div className="content">{content.length>0?content:"Empty Please click any Buttons"}</div>
  )
}

export default Content