import {useContext} from "react";
import {ShopContext} from "../context/ShopContext";
import "./InformationCard.css"; 




function AddRemoveCart({productId}) {
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);

    const count = cartItems[productId] || 0;
    

    return (
        <div className="add-remove-container">
            <div className="counter">
                <button className="remove-button" onClick={() => removeFromCart(productId)}>-</button>
                <p className="count-number">{count}</p>
                <button className="add-button" onClick={() => addToCart(productId)}>+</button>
                
            </div>
            <button 
                className={count > 0 ? "cart-action-btn in-cart" : "cart-action-btn"} 
                onClick={() => count > 0 ? removeFromCart(productId) : addToCart(productId)}
                >
                {count > 0 ? "Remove from Cart" : "Add to Cart"}
            </button>
            
        </div>
    );
}

export default AddRemoveCart;