import React from "react"

const Footer = () => {

    let date =new Date();

  return (
    <footer>
        <div> 
            CopyRight &copy; {date.getFullYear()}
        </div>
    </footer>
  )
}

export default Footer