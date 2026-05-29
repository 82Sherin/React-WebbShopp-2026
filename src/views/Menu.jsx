
import "./Menu.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import menuEnglish from "../assets/menuEnglish.jpg";
import menuSpanish from "../assets/menuSpanish.jpg";
import menuSwedish from "../assets/menuSwedish.jpg";
import drinks from "../assets/drinks.jpg";


const menuImages = [
  { id: 1, src: menuEnglish, alt: "Menu in English" },
  { id: 2, src: menuSpanish, alt: "Menu in Spanish" },
  { id: 3, src: menuSwedish, alt: "Menu in Swedish" },
  { id: 4, src: drinks, alt: "Drinks menu" },
];

function MenuImg() {
  return (
    <>
    <Header/>
    <div className="menu-container">
      {menuImages.map((menu) => (
        <img
          key={menu.id}
          src={menu.src}
          alt={menu.alt}
          className="menu-image"
        />
      ))}
    </div>
    <Footer/>
    </>
  );
}

export default MenuImg;