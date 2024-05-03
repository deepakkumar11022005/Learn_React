
import './App.css';
import Header from './Header';
import FetchData from './FetchData';
import Content from './Content';
import { useState,useEffect } from 'react';
function App() {

  const [isloading,setIsLoading]=useState(true)
  const [content, setContent] = useState()
  const [error, setError] = useState(null)
  const handleComments = () => {
    handleFetch('https://jsonplaceholder.typicode.com/comments')
  }
  const handlePosts = () => {
    console.log("post")
    handleFetch('https://jsonplaceholder.typicode.com/posts')
  }
  const handlePhotos = () => {
    handleFetch('https://jsonplaceholder.typicode.com/photos')
  }
  const handleUsers = () => {
    handleFetch("https://jsonplaceholder.typicode.com/users")
  }
  const handleTodos = () => {
    handleFetch("https://jsonplaceholder.typicode.com/todos")
  }
  const handleAlbums = () => {
    handleFetch("https://jsonplaceholder.typicode.com/albums")
  }
  const handleFetch = async (API_URL) => {
    const result = await FetchData(API_URL, setError,setIsLoading)
    setContent(result)
  }
  return (
    <div>
      <Header
        handleComments={handleComments}
        handlePosts={handlePosts}
        handlePhotos={handlePhotos}
        handleUsers={handleUsers}
        handleTodos={handleTodos}
        handleAlbums={handleAlbums}
      />
      <Content
        content={!isloading && JSON.stringify(content)}
      />
    </div>
  );
}

export default App;
