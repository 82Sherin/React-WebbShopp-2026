import {  useState, useEffect } from "react";
import { ShopContext } from "./ShopContext";



// Function to fetch/get the product from API
const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) throw new Error("Not found!");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("Something went wrong:", error);
    return []; // Empty array so the system does not crash
  }
};

// Helper to safely read from localStorage
const loadFromStorage = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback; // If nothing saved, return fallback value
  } catch (error) {
    console.error(`Failed to load "${key}" from localStorage:`, error);
    return fallback; // If localStorage crashes, return fallback so app doesn't crash
  }
};

// Helper to safely write to localStorage
const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Failed to save "${key}" to localStorage:`, error); // Log error but don't crash the app
  }
};

// This component encloses <App/> so all children get access to the context
export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  // Load cart from localStorage on first render, fallback to empty object
  const [cartItems, setCartItems] = useState(() =>
    loadFromStorage("cartItems", {})
  );

  // Load wishlist from localStorage on first render, fallback to empty array
  const [wishlistItems, setWishlistItems] = useState(() =>
    loadFromStorage("wishlistItems", [])
  );

  // Fetch products once on mount and build the initial empty cart
  useEffect(() => {
    fetchProducts().then((data) => { // Fetch the products and then the product array
      if (data.length > 0) { // Check if the product exist so the array isn't empty
        setProducts(data); // Save the products in state

        // Only build default cart if localStorage was empty, so we never overwrite a saved cart
        setCartItems((prev) => {
          if (Object.keys(prev).length === 0) {
            const defaultCart = {};
            data.forEach((product) => {
              defaultCart[product.id] = 0; // Build cart keyed by product id, all starting at 0
            });
            return defaultCart;
          }
          return prev; // If cart already has items from localStorage, keep them
        });
      }
    });
  }, []); // useEffect renders just once when the component mounts

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    saveToStorage("cartItems", cartItems);
  }, [cartItems]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    saveToStorage("wishlistItems", wishlistItems);
  }, [wishlistItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 })); // I use prev to avoid race condition, ...prev: spread operator copies old value
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0), // Prevents going below 0
    }));
  };

  const getTotalCartAmount = () => { // Count total amount
    return Object.entries(cartItems).reduce((total, [id, qty]) => { // Object.entries(cartItems) converts object to an array, reduce summarizes everything
      if (qty === 0) return total; // Jump over empty products
      const product = products.find((p) => p.id === Number(id)); // Find product by id, matching right product-id from the cart with the right product, Number(id) needed because object key is a "string"
      return product ? total + product.price * qty : total; // The total price * quantity
    }, 0);
  };

  const getTotalCartItems = () => { // Count amount of products
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0); // Summarize quantities
  };

  const toggleWishlist = (productId) => {
    setWishlistItems((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId) // If already in wishlist, remove it
        : [...prev, productId] // If not in wishlist, add it
    );
  };

  const isInWishlist = (productId) => wishlistItems.includes(productId);

  // Collect every part that shares globally
  const contextValue = {
    products,
    setProducts,      // So SearchBar can still filter
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    wishlistItems,
    toggleWishlist,
    isInWishlist,
  };

  return ( // All the children in App can use the provider without props drilling
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};