import React from 'react'
import './App.css'
const Header = ({handleAlbums,handlePhotos,handlePosts,handleTodos,handleUsers,handleComments}) => {
  return (
    <div className="header">
     
            <button onClick={handleComments}>Comments</button>
            <button onClick={handlePosts}>Posts</button>
            <button onClick={handleAlbums}>albums</button>
            <button onClick={handlePhotos}>photos</button>
            <button onClick={handleTodos}>todos</button>
            <button onClick={handleUsers}>users</button>
    </div>
  )
}

export default Header