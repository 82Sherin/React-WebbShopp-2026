
import "./ProjectCard.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("not found!");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("something went wrong:", error);
  }
};

function ProjectCard({products, setProducts}) {
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
      {
            products.length > 0 ?
            products.map((product) => (
        <Link to={`/project/${product.id}`} key={product.id}>
          <div className="project-card">
            <img className="project-card-image" src={product.thumbnail} alt={product.title} />
            <h2 className="project-card-title">{product.title}</h2>
          </div>
        </Link>
      ))
      :
      <p>No product found</p>
    
    }
 
    </>
  );
}

export default ProjectCard;