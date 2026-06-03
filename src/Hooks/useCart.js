import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export const useCart = (productId) => { // Takes productId as input — so it knows which specific product to look at in the cart
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext); // useContext(ShopContext) — reaches into the global context and pulls out cartItems, addToCart and removeFromCart
  const count = cartItems[productId] || 0;
  //const count = cartItems[productId] || 0 — looks up how many of THIS specific product are in the cart.
  //  The || 0 means if the product isn't in the cart yet, default to 0 instead of undefined
  return { //Returns count, addToCart, removeFromCart — packages just what a cart component needs
    count,
    addToCart,
    removeFromCart,
  };
};

/*The custom hook:

hides the context logic
calculates the count
groups the cart functions together
makes the components cleaner*/