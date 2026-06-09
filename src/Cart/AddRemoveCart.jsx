import { useCart } from "../Hooks/useCart";
import "../project/InformationCard.css";

function AddRemoveCart({ productId }) {

    // Get cart functionality and current product count
    // from the custom useCart hook
    const {
        count,
        addToCart,
        removeFromCart
    } = useCart(productId);

    return (

        // Main container for cart controls
        <div className="add-remove-container">

            <div className="counter">

                {/* Remove one product from cart */}
                <button
                    className="remove-button"
                    onClick={() => removeFromCart(productId)}
                >
                    -
                </button>

                {/* Display current amount of this product in cart */}
                <p className="count-number">{count}</p>

                {/* Add one product to cart */}
                <button
                    className="add-button"
                    onClick={() => addToCart(productId)}
                >
                    +
                </button>

            </div>

            {/* Main cart action button
                Changes text and style depending on
                whether the product exists in the cart
            */}
            <button
                className={
                    count > 0
                        ? "cart-action-btn in-cart"
                        : "cart-action-btn"
                }

                // If product exists in cart:
                // remove it
                // Otherwise add it to cart
                onClick={() =>
                    count > 0
                        ? removeFromCart(productId)
                        : addToCart(productId)
                }
            >

                {/* Conditional rendering of button text */}
                {count > 0
                    ? "Remove from Cart"
                    : "Add to Cart"}
            </button>

        </div>
    );
}

export default AddRemoveCart;