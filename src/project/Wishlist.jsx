import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import Header from "../views/Header";
import Footer from "../views/Footer";
import { Heart } from "phosphor-react";
import "./Wishlist.css";

function Wishlist() {
  const { products, wishlistItems, toggleWishlist, addToCart } = useContext(ShopContext);

  const wishlistProducts = products.filter((p) => wishlistItems.includes(p.id));

  return (
    <>
      <Header />
      <div className="wishlist-container">
        <h1 className="wishlist-title">Your Wishlist</h1>
        {wishlistProducts.length === 0 ? (
          <div className="wishlist-empty">
            <p>Your wishlist is empty.</p>
            <Link to="/project" className="wishlist-back-link">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="wishlist-items">
            {wishlistProducts.map((product) => (
              <div className="wishlist-card" key={product.id}>
                <Link to={`/project/${product.id}`}>
                  <img
                    className="wishlist-card-image"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                </Link>
                <div className="wishlist-card-info">
                  <h2 className="wishlist-card-title">{product.title}</h2>
                  <p className="wishlist-card-price">${product.price}</p>
                  <div className="wishlist-card-actions">
                    <button
                      className="wishlist-add-btn"
                      onClick={() => addToCart(product.id)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="wishlist-remove-btn"
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <Heart size={20} weight="fill" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;