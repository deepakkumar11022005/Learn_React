import React from "react"
import { useRef } from 'react'
const AddItem = ({ newItem, setNewItem, handleSubmit, search, setSearch }) => {

  const inputRef = useRef();

  return (

    <div className="addItem_search  col-md-6 col-sm-11 col-lg-6 ">
      <div>
        <form onSubmit={handleSubmit} className="addItem ">
          <div class="input-group  ">
            <input type="text"
              autoFocus
              required
              ref={inputRef}
              placeholder="Enter"
              value={newItem}
              className="form-control "
              onChange={(e) => setNewItem(e.target.value)
              }
            />
            <button class="btn btn-primary" type="submit" onClick={() => inputRef.current.focus()}>Add</button>
          </div>
        </form>
      </div>
      <div>

        <form className="search " onSubmit={(e) => e.preventDefault()}>
          <input type="text"
            className="form-control"
            placeholder="Search Content"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

      </div>
    </div>
  )
}

export default AddItem