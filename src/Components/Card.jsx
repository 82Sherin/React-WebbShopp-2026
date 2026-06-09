import "./Card.css";

//item is a prop passed into the Card component. It contains the product data, such as the image, name, description, and price

function Card({ item }) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={item.img}
        alt={item.name}
      />

      <h2 className="card-title">
        {item.name}
      </h2>

      <p className="card-text">
        {item.description}
      </p>

      <p>{item.price}€</p>
    </div>
  );
}

export default Card;