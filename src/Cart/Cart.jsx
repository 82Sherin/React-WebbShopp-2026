import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../views/Header";
import Footer from "../views/Footer";
import "./Cart.css";

function Cart() {
  const { cartItems, products, addToCart, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  const cartProducts = products.filter((product) => cartItems[product.id] > 0);

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="cart-container">
        <h1 className="cart-title">Your Cart</h1>

        {cartProducts.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <Link to="/project" className="cart-back-link">
              Back to Products
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartProducts.map((product) => (
                <div className="cart-card" key={product.id}>
                  <img
                    className="cart-card-image"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <div className="cart-card-info">
                    <h2 className="cart-card-title">{product.title}</h2>
                    <p className="cart-card-price">${product.price}</p>
                    <div className="cart-card-controls">
                      <button onClick={() => removeFromCart(product.id)}>−</button>
                      <span>{cartItems[product.id]}</span>
                      <button onClick={() => addToCart(product.id)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <p className="cart-total">
                Total: <span>${getTotalCartAmount().toFixed(2)}</span>
              </p>
              <button className="cart-checkout-btn" onClick={() => navigate("/checkout")}>Checkout</button>
              <button className="cart-back-link" onClick={() => navigate("/project")}>Continue shopping</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;