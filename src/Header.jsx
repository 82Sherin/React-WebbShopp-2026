import { Link } from "react-router-dom";

function Header(){

    return(
        <header>
            <h1>Taste Of Greek</h1>
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
                </ul>
            </nav>
            <hr />
        </header>
    );

}

export default Header