
import "./ProjectCard.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        console.log(data.products);
        setProducts(data.products);
      }
    });
  }, []);

  return (
    <>
      {products.map((product) => (
        <Link to={`/project/${product.id}`} key={product.id}>
          <div className="project-card">
            <img className="project-card-image" src={product.thumbnail} alt={product.title} />
            <h2 className="project-card-title">{product.title}</h2>
          </div>
        </Link>
      ))}
    </>
  );
}

export default ProjectCard;