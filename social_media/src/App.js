
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import Post from './Post';
import PostLayout from './PostLayout';
function App() {
  return (
    <div className='App'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nav">Nav</Link></li>
        <li><Link to="/postpage">PostPage</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/nav' element={<Nav />} />

          {/* nested routing */}
        <Route path='/postpage' element={<PostLayout/>}>
          {/* dynamic route/:key */}
          {/* index -> path=' /postpage' */}
          <Route index element={<PostPage />}/>
          <Route path='newpost' element={<NewPost />} />
          <Route path=':id' element={<Post />} />
          {/* no / is not allowed */}
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/missing' element={<Missing />} />
        <Route path='/footer' element={<Footer />} />
        {/* unknown url  -> go to Missing */}
        <Route path='*' element={<Missing />} />
      </Routes>
      {/* <Header/>
      <Nav/>
      <Home/>
      <NewPost/>
      <PostPage/> 
      <About/> 
      <Missing/> 
       <Footer/> */}

    </div>
  );
}

export default App;
