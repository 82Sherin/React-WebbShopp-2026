
import "./ProjectCard.css";
import { useState, useEffect } from "react";

const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("kunde inte hämta datan");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("något gick snett:", error);
  }
};

function ProjectCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      if (data) {
        setProducts(data.products); // DummyJSON wraps items in a "products" array
      }
    });
  }, []);

  return (
    <>
      {products.map((product) => (
        <div className="project-card" key={product.id}>
          <img className="project-card-image" src={product.thumbnail} alt={product.title} />
          <h2 className="project-card-title">{product.title}</h2>
          <p className="project-card-text">{product.description}</p>
          <p>{product.price}€</p>
        </div>
      ))}
    </>
  );
}



export default ProjectCard