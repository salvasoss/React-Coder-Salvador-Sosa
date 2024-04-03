import React, { useContext } from "react";
import { CartView } from "../cartView/CartView";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {

    const {cart} = useContext(CartContext)
    return (
        <div> 
            {!cart.length 
            ? <div> 
                <h2> Tu carrito esta vacio  </h2>
                <h4> Segui comprando por nuestra tienda!!</h4>
                <Link to="/"> Ir a comprar</Link>
            </div> 
            : <CartView/>  }
        </div>
    )
}