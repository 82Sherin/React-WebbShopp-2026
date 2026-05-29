import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // hämtar parametrar från URL:en
import "./InformationCard.css";
import Header from "../views/Header";
import Footer from "../views/Footer";
import AddRemoveCart from "./AddRemoveCart";



function InformationCard() {
  const { id } = useParams(); // hämtar produkt-ID från URL:en
  const [product, setProduct] = useState(null); //Skapa en state-variabel som heter product, ge den startvärdet null, och ge mig en funktion setProduct som kan ändra värdet senare.

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
    <Header/>
    <div className="information-card">
      <img className="information-card-image" src={product.thumbnail} alt={product.title} />
      <h2 className="information-card-title">{product.title}</h2>
      <p className="information-card-text">{product.description}</p>
      <p>{product.price}€</p>
       <AddRemoveCart productId={product.id}/>
    </div>
    
    
    <Footer/>
    </>
  );
}
// 1. Komponenten laddas
//          ↓
//2. Hämtar id från URL
//          ↓
//3. fetch() anropar API
//          ↓
//4. API skickar produktdata
//          ↓
//5. setProduct(data)
//          ↓
//6. React renderar om komponenten
//          ↓
//7. Bild, titel, beskrivning och pris visas

export default InformationCard;