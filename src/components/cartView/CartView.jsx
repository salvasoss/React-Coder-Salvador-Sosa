import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartView.scss"
import { Link } from "react-router-dom";


export const CartView = () => {
    const {cart,removeItem, cartPriceTotal, clear} = useContext(CartContext)

    return (
        <div>
            <h2> Tu carrito</h2>
            <div>
                {cart.map ((compra) => {
                    return (
                        <div key = {compra.id} className="cartViewItems" >
                            <img src={compra.image} alt={compra.name}  />
                            <span className="itemName"> {compra.name} </span>
                            <span className="itemQuantity"> {compra.quantity}</span>
                            <span className="itemPrice"> ${compra.price},00</span>
                            <span className="itemFinalPrice"> Precio Final: ${compra.price * compra.quantity}</span>
                            <button className="buttonDeleteProduct" onClick={() => removeItem(compra.id)}>X </button>
                        </div>
                    )
                })}
            </div>
            <div className="checkout">   
            <p className="totalAmount">Total a pagar: ${cartPriceTotal()}</p>

            <button onClick={clear} className="buttonClearCart"> Vaciar Carrito</button>
            <Link className="buttonCheckout" to= "/checkout"> Finalizar Compra</Link>
        
            </div>
            
        </div>
    )
}