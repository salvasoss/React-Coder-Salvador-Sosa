import "./navbar.scss";
import CartWidget from "../cartWidget/CartWidget";
const Navbar = () => {
    return (
        <div>
            <nav className="navContainer">
                <a  href="/"> <img className="logo" src="../img/log chicp.png" alt="logo" /> </a>

                <div className="linksContainer">
                    <a className="link" href="/"> PRODUCTOS  </a>
                    <a className="link" href="/"> DESTACADOS </a>
                    <a className="link" href="/">  CONTACTO  </a>
                </div>

                <CartWidget/> 
            </nav>
        </div>
    )
} 
export default Navbar;