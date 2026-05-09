
import Project from "./project/Project.jsx";
import ProjectCard from "./project/ProjectCard.jsx";
import Card from "./Card.jsx";
import Home from "./views/Home.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import TakeAway from "./views/TakeAway.jsx";
import Menu from "./views/Menu.jsx";


function App() {
  return (
    <>
  
    <BrowserRouter>
   
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/take-away" element={<TakeAway/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/menu" element={<Menu/>}/>
        
      </Routes>
  
    </BrowserRouter>
  </>


  ) 
  
  
 
}

export default App
