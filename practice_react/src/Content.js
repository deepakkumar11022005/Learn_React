import React from "react"
import './App.css'
import { FaTrash } from "react-icons/fa";

const Content = ({ items, handleCheckBox, handleTrashBox }) => {

    return (
        <div className="content col-lg-8 col-md-6 col-sm-12">

            {items.length !== 0 ?
                <ul className="list-group items_ul">

                    {
                        items.map((item) => (
                            <li key={item.id} className="list-group-item items">
                                <input
                                    type="checkbox"
                                    className="form-check-input checkBox"
                                    checked={item.checked} onChange={() => handleCheckBox(item.id)} />
                                <div className="label">
                                    <label className={item.checked ? 'checked ' : ''}>{item.Content}</label>
                                    <div className="date_time">
                                        <span className="date">{item.date}</span>
                                        <span>{item.time}</span>
                                    </div>
                                </div>
                                <FaTrash onClick={() => handleTrashBox(item.id)} className="trashCan" />
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