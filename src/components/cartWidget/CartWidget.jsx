import "./cartWidget.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = ({counter}) => {

    const {cartQuantity} =useContext (CartContext)

    return (
        <div>
            {cartQuantity() > 0 &&  <span> {cartQuantity()} </span>}
            <img className="cart" src="./img/carrito-de-compras.png" alt="carrito" /> 
        </div>
    )
}
export default CartWidget;