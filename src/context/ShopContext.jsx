import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null); // Global shop- context, start with null to fill in later with product, cart, add/remove from cart

// function to fetch/get the product from API
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
    return []; //Empty array so the system do not crashes
  }
};

// This component encloses <App/> all the children get access to the context
export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({}); // state for the cart to store the items in an object
  const [wishlistItems, setWishlistItems] = useState([]);

  // Fetch products once on mount and build the initial empty cart
  useEffect(() => {
    fetchProducts().then((data) => { // fetch the product and then the product array
      if (data.length > 0) { // contole if the product exist so the array isn't empty
        setProducts(data); // save the products in state

        // Build cart keyed by product id, all starting at 0
        const defaultCart = {};
        data.forEach((product) => {
          defaultCart[product.id] = 0;
        });
        setCartItems(defaultCart); // save in the cart
      }
    });
  }, []); // useEffect render just ones when the component mounts

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 })); // I use prev to aboid race condition ...prev: spread operator copies old value
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0), // prevents going below 0
    }));
  };

  const getTotalCartAmount = () => { // count total amount
    return Object.entries(cartItems).reduce((total, [id, qty]) => { // object.entries(cartItems) convert obejct to an array, reduce summery everything
      if (qty === 0) return total; // jump over empty products
      const product = products.find((p) => p.id === Number(id)); // find product by id, matching right product-id from the cart with the right product, Numeber(id) needed bcs object key is a "string"
      return product ? total + product.price * qty : total; // the total price * quantity
    }, 0);
  };

  const getTotalCartItems = () => { // count amount of products
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0); // summarize quantities
  };

  const toggleWishlist = (productId) => {
    setWishlistItems((prev) => 
     prev.includes(productId)
      ? prev.filter((id) => id !== productId)
      : [...prev, productId]
   );
  };

  const isInWishlist = (productId) => wishlistItems.includes(productId);


  // Collect every part that shares global
  const contextValue = {
    products,
    setProducts,      // so SearchBar can still filter
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

