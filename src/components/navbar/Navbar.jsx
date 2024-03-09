import "./navbar.scss";
import CartWidget from "../cartWidget/CartWidget";
import { NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navContainer">
                <NavLink  to="/"> <img className="logo" src="../img/log chicp.png" alt="logo" /> </NavLink>

                <div className="linksContainer">
                    <NavLink className="link" to="/category/productos"> PRODUCTOS  </NavLink>
                    <NavLink className="link" to="/category/destacados"> DESTACADOS </NavLink>
                    <NavLink className="link" to="/contacto">  CONTACTO  </NavLink>
                </div>

                <CartWidget/> 
            </nav>
        </div>
    )
} 
export default NavBar;