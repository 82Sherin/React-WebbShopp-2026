import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./assets/logo.jpg"; 
function Header(){

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
                        <Link to="/take-away">Take Away</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/project">Project</Link>
                    </li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header