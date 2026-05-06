
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Home from "./Home.jsx";
import { BrowserRouter as Route, Routes, Router, Link, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <>
  
    <BrowserRouter>
    <Router>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
      </Routes>
    </Router> 
    </BrowserRouter>
  </>


  ) 
  
  
 
}

export default App
