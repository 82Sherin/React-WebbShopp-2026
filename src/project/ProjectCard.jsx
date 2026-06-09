import "./ProjectCard.css";
import { Link } from "react-router-dom";
import { Heart } from "phosphor-react";
import { useCart } from "../Hooks/useCart";
import { useWishlist } from "../Hooks/useWishlist";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";


// Main component that renders all product cards
function ProjectCard() {

  // Get the global products array from ShopContext
  // The products are shared globally across the application
  const { products } = useContext(ShopContext);

  return (

    // Container for all product cards
    <div className="project-card-container">

      {/* Conditional rendering:
          If products exist, render all products.
          Otherwise show fallback message.
      */}
      {products.length > 0 ? (

        // Loop through all products
        // and render one ProductCard component for each product
        products.map((product) => (

          // key helps React identify each element efficiently
          <ProductCard
            key={product.id}
            product={product}
          />
        ))

      ) : (

        // Displayed if no products are found
        <p>No product found</p>
      )}
    </div>
  );
}


// Separate component for a single product card
// This allows each product to have its own hook state
function ProductCard({ product }) {

  // Custom hook for cart functionality
  // Handles product quantity and add-to-cart logic
  const {
    count,
    addToCart
  } = useCart(product.id);


  // Custom hook for wishlist functionality
  // Checks if product exists in wishlist
  // and toggles wishlist state
  const {
    inWishlist,
    toggleWishlist
  } = useWishlist(product.id);

  return (

    // Single product card container
    <div className="project-card">

      {/* Wishlist button */}
      <button
        className="wishlist-heart-btn"

        // Add or remove product from wishlist
        onClick={() => toggleWishlist(product.id)}
      >

        {/* Heart icon from phosphor-react */}
        <Heart

          // Icon size in pixels
          size={22}

          // Conditional rendering:
          // Filled heart if product exists in wishlist
          // Regular outline if not
          weight={inWishlist ? "fill" : "regular"}

          // Change heart color depending on wishlist state
          color={
            inWishlist
              ? "hsl(0, 80%, 50%)"
              : "hsl(0, 0%, 60%)"
          }
        />
      </button>


      {/* Link to dynamic product details page */}
      <Link to={`/project/${product.id}`}>

        {/* Product image */}
        <img
          className="project-card-image"
          src={product.thumbnail}
          alt={product.title}
        />

        {/* Product title */}
        <h2 className="project-card-title">
          {product.title}
        </h2>
      </Link>


      {/* Product price */}
      <p>${product.price}</p>


      {/* Add product to cart button */}
      <button

        className="project-add-btn"

        // Add selected product to cart
        onClick={() => addToCart(product.id)}
      >

        {/* Display current amount in cart if count is greater than 0 */}
        Add to Cart {count > 0 && `(${count})`}
      </button>
    </div>
  );
}

export default ProjectCard;