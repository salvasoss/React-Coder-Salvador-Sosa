import "./navbar.scss";
import CartWidget from "../cartWidget/CartWidget";
import { NavLink} from "react-router-dom";


const NavBar = () => {

    return (
        <div>
            <nav className="navContainer">
                <NavLink  to="/"> <img className="logo" src="../img/log chicp.png" alt="logo" /> </NavLink>

                <div className="linksContainer">
                    <NavLink className="link" to="/category/Productos"> PRODUCTOS  </NavLink>
                    <NavLink className="link" to="/category/Destacados"> DESTACADOS </NavLink>
                    <NavLink className="link" to="/contacto">  CONTACTO  </NavLink>
                </div>

                 <NavLink to = "/carrito" style={{textDecoration:'none'}} > <CartWidget counter={1}/>  </NavLink>
            </nav>
        </div>
    )
} 
export default NavBar;