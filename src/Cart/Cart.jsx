import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../views/Header";
import Footer from "../views/Footer";
import "./Cart.css";

function Cart() {

  // Get global cart data and functions from ShopContext
  const {
    cartItems,
    products,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  // Filter products to only include items that exist in the cart
  const cartProducts = products.filter(
    (product) => cartItems[product.id] > 0
  );

  // Hook used for programmatic navigation between pages
  const navigate = useNavigate();

  return (
    <>
      {/* Render page header */}
      <Header />

      <div className="cart-container">
        <h1 className="cart-title">Your Cart</h1>

        {/* Conditional rendering:
            If the cart is empty, show empty cart message.
            Otherwise show cart products and checkout section.
        */}
        {cartProducts.length === 0 ? (

          // Empty cart section
          <div className="cart-empty">
            <p>Your cart is empty.</p>

            {/* Link back to product page */}
            <Link to="/project" className="cart-back-link">
              Back to Products
            </Link>
          </div>

        ) : (
          <>
            <div className="cart-items">

              {/* Loop through all cart products and render each product card */}
              {cartProducts.map((product) => (
                <div className="cart-card" key={product.id}>

                  {/* Product image */}
                  <img
                    className="cart-card-image"
                    src={product.thumbnail}
                    alt={product.title}
                  />

                  <div className="cart-card-info">

                    {/* Product title */}
                    <h2 className="cart-card-title">
                      {product.title}
                    </h2>

                    {/* Product price */}
                    <p className="cart-card-price">
                      ${product.price}
                    </p>

                    <div className="cart-card-controls">

                      {/* Remove one product from cart */}
                      <button
                        onClick={() => removeFromCart(product.id)}
                      >
                        −
                      </button>

                      {/* Display current quantity */}
                      <span>{cartItems[product.id]}</span>

                      {/* Add one product to cart */}
                      <button
                        onClick={() => addToCart(product.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart summary section */}
            <div className="cart-summary">

              {/* Display total cart amount with 2 decimals */}
              <p className="cart-total">
                Total:
                <span>
                  ${getTotalCartAmount().toFixed(2)}
                </span>
              </p>

              {/* Navigate to checkout page */}
              <button
                className="cart-checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>

              {/* Navigate back to products page */}
              <button
                className="cart-back-link"
                onClick={() => navigate("/project")}
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </div>

      {/* Render page footer */}
      <Footer />
    </>
  );
}

export default Cart;