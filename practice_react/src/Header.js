import React from "react"
function Header({title}) {
    return (
       <header className="App-header">
        <h1>{title}</h1>
       </header>
    )
}
Header.defaultProps={
    title:"TODO LIST",
    name:"Deepakkumar"
}
export default Header
