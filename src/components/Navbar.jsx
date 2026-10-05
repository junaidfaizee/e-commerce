import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import search from "../assets/search_icon.png";
import profile from "../assets/profile_icon.png";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-white d-flex 
        justify-content-between align-items-center container">

                        {/*logo*/}
            <Link to= "/" className="navbar-brand fw-bold fs-3">
            <img src={logo} alt="Forever Logo" />
            </Link>

                         {/*navigation*/}

            <div className="nav-links d-flex gap-3">
                <Link to="/">HOME</Link>
                <Link to="/collection">COLLECTION</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/contact">CONTACT</Link>
            </div>
            <div className="d-flex gap-3">
                <img src={search} alt="Search Icon" />
                <img src={profile} alt="Profile Icon" />
                <img src={cart} alt="Cart Icon" />    
            </div>
        </nav>
    );
}

export default Navbar;