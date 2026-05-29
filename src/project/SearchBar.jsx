import { useState, useEffect, useContext } from "react";
import useDebounce from "./useDebounce";
import { ShopContext } from "../context/ShopContext";
import "./SearchBar.css";

function SearchBar() {
    const { setProducts } = useContext(ShopContext);
    const [searchTerm, setSearchTerm] = useState("");
    const debouncedSearchTerm = useDebounce(searchTerm, 3000);

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
                    setProducts(data.products);
                } catch (error) {
                    console.error("Something went wrong:", error);
                }
            };
            fetchSearchBar();
        }
    }, [debouncedSearchTerm]);

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