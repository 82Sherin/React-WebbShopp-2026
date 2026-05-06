
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Home from "./Home.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


function App() {
  return (
    <>
  
    <BrowserRouter>
   
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/take-away" element={<Card/>}/>
        
      </Routes>
  
    </BrowserRouter>
  </>


  ) 
  
  
 
}

export default App
