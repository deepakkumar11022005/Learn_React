import React from "react"
const Content = () => {
    let userName="Deepak "
    function contentChanger(){
        let contents=["To Do List","Daily Notes","Work to Complete"];
        let n=Math.floor(Math.random()*3);
        return contents[n];
    }
  return (
    <div>
        <h3>Hi {userName}</h3>
        <p>Welcome to Your {contentChanger()}</p>
    </div>
  )
}

export default Content