
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import './App.css'
import AddItem from "./AddItem";


function App() {

  let Username = "Deepak"
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todoList'))||[]);


  let handleTrashBox = (id) => {
    let array = items.filter(item => item.Id !== id)
    setItems(array);
    localStorage.setItem("todoList", JSON.stringify(array))
  }
  let handleCheckBox = (id) => {
    let newArray = items.map(item =>
      item.Id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newArray);
    localStorage.setItem("todoList", JSON.stringify(newArray))
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    addNewItem(newItem)
    console.log(newItem);
    setNewItem("");
  }
  const addNewItem = (content) => {
    console.log(items)
    if (content.length > 0) {
      const newid = items.length ? items[0].Id + 1 : 1;
      const newItem = {
        Id: newid,
        Content: content,
        checked: false,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      }
      const newArray = [newItem, ...items];
      setItems(newArray);
      localStorage.setItem("todoList", JSON.stringify(newArray))

    }
  }
  let [search, setSearch] = useState("");
  return (
    <div className="body">
      <Header title="TODO LIST" />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />

      <Content
        items={items.filter(item=>(item.Content.toLowerCase()).includes(search.toLowerCase()))}
        handleTrashBox={handleTrashBox}
        handleCheckBox={handleCheckBox}
        userName={Username}
      
      />



      <Footer />
    </div>
  );
}

export default App;
