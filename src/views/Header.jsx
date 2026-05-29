import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/logo.jpg"; 
import { ShoppingCart, Heart } from "phosphor-react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";



function Header(){
    const { getTotalCartItems, wishlistItems} = useContext(ShopContext);

    return(
        <header>
            <img src={logo} alt="Taste Of Greek logo" /> 
            
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/take-away">Order</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/project">Project</Link>
                    </li>
                    <li className="cart-icon-wrapper">
                    <Link to="/cart">
                    <ShoppingCart size={25}/>
                    {getTotalCartItems() > 0 && (
                        <span className="cart-count">{getTotalCartItems()}</span>
                    )}
                    </Link>
                    </li>
                    <li className="cart-icon-wrapper">
                    <Link to="/wishlist">
                    <Heart size={25} wight={wishlistItems.length > 0 ? "fill" : "regular"} />
                        {wishlistItems.length > 0 &&(
                            <span className="cart-count">{wishlistItems.length}</span>
                        )}
                    </Link>
                    </li>
                    
                </ul>
                
            </nav>
            <hr />
        </header>
    );
}

export default Header