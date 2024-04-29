import React from "react"
import './App.css'
import { FaTrash } from "react-icons/fa";

const Content = ({items,handleCheckBox,handleTrashBox}) => {
   
    return (
        <div>
        
           {items.length!==0 ?
            <ul>

                {
                    items.map((item) => (
                        <li key={item.Id}>
                            <input 
                            type="checkbox" 
                            checked={item.checked} onChange={() => handleCheckBox(item.Id)} />
                            <label className={item.checked ? 'checked' : ''}>{item.Content}</label>
                            <button onClick={() => handleTrashBox(item.Id)}><FaTrash /></button>
                        </li>
                    ))
                }

            </ul>
            : <p>No Content</p>
            }
        </div>
    )
}

export default Content