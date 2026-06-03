import Project from "./project/Project.jsx";
import ProjectCard from "./project/ProjectCard.jsx";
import Home from "./views/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TakeAway from "./views/TakeAway.jsx";
import Menu from "./views/Menu.jsx";
import InformationCard from "./project/InformationCard.jsx";
import { ShopContextProvider } from "./context/ShopContextProvider.jsx";
import Cart from "./Cart/Cart.jsx";
import Wishlist from "./project/Wishlist.jsx";
import { Form } from "./Form.jsx";

function App() {
  return (
    <BrowserRouter>
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/take-away" element={<TakeAway />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<InformationCard />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Form />} />
        </Routes>
      </ShopContextProvider>
    </BrowserRouter>
  );
}

export default App;