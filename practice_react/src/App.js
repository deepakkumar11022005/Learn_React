
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import './App.css'


function App() {

  
  return (
   <div className="App" style={{
    border:'2px solid gray',
    padding:'10px',
  marginTop:'50px'
   }}>
     <Header />
    <Content />
    <Footer />
   </div>
  );
}

export default App;
