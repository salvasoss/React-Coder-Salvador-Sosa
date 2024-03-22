import "./cartWidget.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = ({counter}) => {

    const {cart} =useContext (CartContext)

    return (
        <div>
            <span> {cart.length} </span>
            <img className="cart" src="./img/carrito-de-compras.png" alt="carrito" /> 
        </div>
    )
}
export default CartWidget;