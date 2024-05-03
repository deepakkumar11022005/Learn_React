
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from "react";
import './App.css'
import AddItem from "./AddItem";
import FetchData from "./FetchData";

function App() {

  const API_URL = "http://localhost:3500/items"
  let Username = "Deepak"
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [error,setError]=useState(null);
  const [isloading,setIsLoading]=useState(true)
  useEffect(() => {
    // setItems(JSON.parse(localStorage.getItem('todoList')))
    const fetchItems = async () => {
      try {
           const response=await fetch(API_URL);
           if(!response.ok) throw Error("data not recieved")
           const list=await response.json();
           setItems(list);
           setError(null)
      }
      catch (err) {
        console.log(err.stack);
        setError(err.message)
      }
      finally{
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      (async ()=> await fetchItems())()
    }, 1000);
  
  }, [])
  let handleTrashBox = async (id) => {
    let array = items.filter(item => item.id !== id)
    setItems(array);
    // localStorage.setItem("todoList", JSON.stringify(array))
    const reqURL=`${API_URL}/${id}`
    const methodObj={
      method:"DELETE"
    }
    const result= await FetchData(reqURL,methodObj)
    if(result) setError(result)
  }
  let handleCheckBox =async (id) => {
    let newArray = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newArray);
    // localStorage.setItem("todoList", JSON.stringify(newArray))
    const myitem=items.filter(item=>item.id===id)
    const  reqURL=`${API_URL}/${id}`
    const methodObj={
      method:"PATCH",
      header:{
        "Content-Type":"application/json"
      },
      body:{checked:myitem[0].checked}

    }
    const result= await FetchData(reqURL,methodObj)
    if(result) setError(result);
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    addNewItem(newItem)
    console.log(newItem);
    setNewItem("");
  }
  const addNewItem = async (content) => {
    console.log(items)
    if (content.length > 0) {
      const newid = items.length ? items[items.length-1].id + 1 : 1;
      const newItem = {
        id: newid,
        Content: content,
        checked: false,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
      }
      const newArray = [newItem, ...items];
      setItems(newArray);
      // localStorage.setItem("todoList", JSON.stringify(newArray))

      const methodObj={
        method:"POST",
        header:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(newItem)
      }
     const result= await FetchData(API_URL,methodObj)
     if(result) setError(result);
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
      {isloading && <p>Loading....</p>}
     {error && <p>Error Occured:{error}</p>}
    
        
      {
        !isloading && !error &&<Content
        items={items.filter(item => (item.Content.toLowerCase()).includes(search.toLowerCase()))}
        handleTrashBox={handleTrashBox}
        handleCheckBox={handleCheckBox}
        userName={Username}

      />}
    

     

      <Footer />
    </div>
  );
}

export default App;
