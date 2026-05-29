import Header from "./Header";
import Footer from "./Footer";
import Card from "../Card";
import greekMenu from "../Data/greekMenu";


function TakeAway() {
  return (
    <>
      <Header />

      <div className="menu-container">
        {greekMenu.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default TakeAway;