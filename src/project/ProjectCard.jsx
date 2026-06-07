import "./ProjectCard.css";
import { Link } from "react-router-dom";
import { Heart } from "phosphor-react";
import { useCart } from "../Hooks/useCart";
import { useWishlist } from "../Hooks/useWishlist";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function ProjectCard() {
  const { products } = useContext(ShopContext); // Still need context for products list

  return (
    <div className="project-card-container">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
}

// Separate component so each card can use the hooks with its own productId
function ProductCard({ product }) {
  const { count, addToCart } = useCart(product.id);
  const { inWishlist, toggleWishlist } = useWishlist(product.id);

  return (
    <div className="project-card">
      <button
        className="wishlist-heart-btn"
        onClick={() => toggleWishlist(product.id)}
      >
        <Heart
          size={22}
          weight={inWishlist ? "fill" : "regular"}
          color={inWishlist ? "hsl(0, 80%, 50%)" : "hsl(0, 0%, 60%)"}
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
        Add to Cart {count > 0 && `(${count})`}
      </button>
    </div>
  );
}

export default ProjectCard;