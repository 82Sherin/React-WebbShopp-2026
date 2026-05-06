import tzatziki from "./assets/tzatziki.jpg"


function Card(){

    return(
         <div className="card">
        <img className= "card-image" src={tzatziki} alt="Tzatziki" />
        <h2 className= "card-title">Tzatziki</h2>
        <p className= "card-text">A greek yhoghurt with cucumber & garlic</p>
        <p>6€</p>

    </div>

    );
   

}

export default Card