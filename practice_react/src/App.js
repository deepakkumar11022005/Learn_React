
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import ListCount from "./ListCount";
import { useState } from "react";
import './App.css'


function App() {
 
  let Username="Deepak"
  

  const [items, setItems] = useState([
    {
      Id: 1,
      Content: "Learn React",
      checked: true
    }
    ,
    {
      Id: 2,
      Content: "leetcode",
      checked: false
    }
    ,
    {
      Id: 3,
      Content: "Bathing",
      checked: true
    }
  ]);
  let  handleTrashBox=(id)=> {
    let array = items.filter(item => item.Id !== id)
    setItems(array);
  }
  let handleCheckBox = (id) => {
    let newArray = items.map(item =>
      item.Id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newArray);
  }

  return (
    <div className="body">
      <Header title="TODO LIST" className="header_class" />
      <Content 
          items={items}
          handleTrashBox={handleTrashBox}
          handleCheckBox={handleCheckBox}
          userName={Username}
      />
       <ListCount length={items.length}/>
      <Footer />
    </div>
  );
}

export default App;
