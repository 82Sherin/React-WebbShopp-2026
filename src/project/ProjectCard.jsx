import "./ProjectCard.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Heart } from "phosphor-react";

function ProjectCard() {
  const { products, addToCart, toggleWishlist, isInWishlist } = useContext(ShopContext);

  return (
    <div className="project-card-container">
      {products.length > 0 ? (
        products.map((product) => (
          <div className="project-card" key={product.id}>
            <button
              className="wishlist-heart-btn"
              onClick={() => toggleWishlist(product.id)}
            >
              <Heart
                size={22}
                weight={isInWishlist(product.id) ? "fill" : "regular"}
                color={isInWishlist(product.id) ? "hsl(0, 80%, 50%)" : "hsl(0, 0%, 60%)"}
              />
            </button>
            <Link to={`/project/${product.id}`}>
              <img
                className="project-card-image"
                src={product.thumbnail}
                alt={product.title}
              />
              <h2 className="project-card-title">{product.title}</h2>
            </Link>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product.id)} className="project-add-btn">
              Add to Cart
            </button>
          </div>
        ))
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
}

export default ProjectCard;