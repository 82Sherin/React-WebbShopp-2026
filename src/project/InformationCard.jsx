import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Get parameters from the URL
import "./InformationCard.css";
import Header from "../views/Header";
import Footer from "../views/Footer";
import AddRemoveCart from "../Cart/AddRemoveCart";

function InformationCard() {

  // Get product ID from the URL
  const { id } = useParams();

  // Create state for storing product data
  // Initial value is null until data is fetched
  const [product, setProduct] = useState(null);

  // Runs when component loads or when id changes
  useEffect(() => {

    // Fetch product data from the API using product ID
    fetch(`https://dummyjson.com/products/${id}`)

      // Convert response to JSON
      .then((res) => res.json())

      // Save fetched product data in state
      .then((data) => {
        console.log(data);
        setProduct(data);
      });

  }, [id]); // Dependency array: rerun effect if id changes


  // Show loading message while data is being fetched
  if (!product) return <p>Loading...</p>;

  return (
    <>
      {/* Render page header */}
      <Header />

      <div className="information-card">

        {/* Product image */}
        <img
          className="information-card-image"
          src={product.thumbnail}
          alt={product.title}
        />

        {/* Product title */}
        <h2 className="information-card-title">
          {product.title}
        </h2>

        {/* Product description */}
        <p className="information-card-text">
          {product.description}
        </p>

        {/* Product price */}
        <p>{product.price}€</p>

        {/* Add/remove product from cart */}
        <AddRemoveCart productId={product.id} />
      </div>

      {/* Render page footer */}
      <Footer />
    </>
  );
}


/*
Application flow:

1. The component renders
         ↓
2. Product ID is retrieved from the URL
         ↓
3. fetch() sends a request to the API
         ↓
4. The API returns product data
         ↓
5. setProduct(data) updates the state
         ↓
6. React re-renders the component
         ↓
7. Product image, title, description, and price are displayed
*/

export default InformationCard;