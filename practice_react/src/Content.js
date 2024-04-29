import React from "react"

import { useState } from "react";

import { FaTrash } from "react-icons/fa";

const Content = () => {
    let userName = "Deepak "
    function contentChanger() {
        let contents = ["To Do List", "Daily Notes", "Work to Complete"];
        let n = Math.floor(Math.random() * 3);
        setName(contents[n]);
    }
    const [name, setName] = useState("John")

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
            checked: true
        }
        ,
        {
            Id: 3,
            Content: "Bathing",
            checked: true
        }
    ]);
    function handleTrashBox(id) {
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
        <div>
            <h3>Hi {userName}</h3>
            <p>Welcome to Your {name}</p>
            <button onClick={contentChanger}>Change name</button>

            <ul>

                {
                    items.map((item) => (
                        <li key={item.Id}>
                            <input 
                            type="checkbox" 
                            checked={item.checked} onChange={() => handleCheckBox(item.Id)} />
                            <label>{item.Content}</label>
                            <button onClick={() => handleTrashBox(item.Id)}><FaTrash /></button>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Content