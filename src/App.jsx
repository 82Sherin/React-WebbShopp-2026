import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import { BrowserRouter as Router, Route,
BrowserRouter} from 'react-router-dom';


function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Header/>}/>
    
  </Routes>
  </BrowserRouter>

  );
  
  
 
}

export default App
