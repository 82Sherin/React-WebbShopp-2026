import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

export const useWishlist = (productId) => { // Takes productId as input — so it knows which specific product to check in the wishlist
  const { wishlistItems, toggleWishlist, isInWishlist } = useContext(ShopContext); // useContext(ShopContext) — reaches into the global context and pulls out wishlistItems, toggleWishlist and isInWishlist
  const inWishlist = isInWishlist(productId);
  // isInWishlist(productId) — checks if THIS specific product is in the wishlist
  // returns true or false instead of a count like useCart
  return { // Returns inWishlist, toggleWishlist, wishlistItems — packages just what a wishlist component needs
    inWishlist,
    toggleWishlist,
    wishlistItems,
  };
};

/*The custom hook:

hides the context logic
checks if the product is in the wishlist
groups the wishlist functions together
makes the components cleaner*/