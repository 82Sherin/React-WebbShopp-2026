import { useState, useEffect, useContext } from "react";
import useDebounce from "../Hooks/useDebounce";
import { ShopContext } from "../context/ShopContext";
import "./SearchBar.css";

function SearchBar() {
    const { setProducts } = useContext(ShopContext);
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 3000); // I use my debounce custom hook that I create to reuse logic, so it's easy if I want to change ex time interval, debouncedSearchTerm only updates after the user stops typing for 3 seconds. 

    useEffect(() => {
        if (debouncedSearchTerm) {
            const fetchSearchBar = async () => {
                try {
                    const response = await fetch(
                        `https://dummyjson.com/products/search?q=${debouncedSearchTerm}`,
                        {
                            method: "GET",
                            headers: { "Content-Type": "application/json" },
                        }
                    );
                    if (!response.ok) throw new Error("Not found!");
                    const data = await response.json();
                    setProducts(data.products); // Here I save the products in context with the argument data.products sends in like a argument to setProducts
                } catch (error) {
                    console.error("Something went wrong:", error);
                }
            };
            fetchSearchBar();
        }
    }, [debouncedSearchTerm]); //The dependency array makes sure that the useEffect hook only runs when debouncedSearchTerm changes.

    return (
        <div>
            <h2 className="search-text">Search Product</h2>
            <input
                type="text"
                placeholder="Product"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}




/* Användaren skriver
       ↓
searchTerm uppdateras direkt
       ↓
useDebounce väntar 3 sekunder
       ↓
debounceSearchTerm uppdateras
       ↓
useEffect körs
       ↓
fetch() skickar API-request
       ↓
data hämtas
       ↓
setProducts uppdaterar state
       ↓
UI renderar produkter*/

export default SearchBar