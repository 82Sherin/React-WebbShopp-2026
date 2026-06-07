import Header from "./Header";
import Footer from "./Footer";
import Card from "../Components/Card";
import greekMenu from "../Data/GreekMenu";


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