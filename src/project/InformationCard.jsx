import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./InformationCard.css";
import Header from "../Header";
import Footer from "../Footer";
import AddRemoveCart from "./AddRemoveCart";



function InformationCard() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

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
    </div>
    <AddRemoveCart/>
    
    <Footer/>
    </>
  );
}

export default InformationCard;