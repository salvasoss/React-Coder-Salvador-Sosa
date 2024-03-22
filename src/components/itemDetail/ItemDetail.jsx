import React, { useContext, useState } from "react";
import { ItemCount } from "../itemCount/ItemCount";
import "./itemDetail.scss"
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({ producto }) => {
    const [compra,setCompra] = useState (false)
    const [cantidadAgregada, setCantidadAgregada] = useState (0)
    const {addItem} = useContext (CartContext)
    
    const onAdd = (cantidad) => {
        addItem (producto, cantidad)
        setCompra (true)
    }
    console.log(cantidadAgregada)
    
    return (
        <div className="itemDetailContainer">

            <div className="itemDetailImage">
                <img src={producto.image} alt={producto.name} />
            </div>

            <div className="itemDetail">
                <div className="itemNamePrice">
                    <h3>  {producto.name} </h3>
                    <p> $ {producto.price} </p>
                </div>

                 {compra ? <button className="goCart"> Ir al carrito </button> : <ItemCount stock={producto.stock} onAdd = {onAdd} /> }

                <div className="itemDetailDescription">
                    <p className="itemDescriptionTitle"> DETALLE DEL PRODUCTO</p>
                    <p>  {producto.description} </p>
                    <button> Tabla de Talles</button>
                </div>
            </div>




        </div>

    )
}

