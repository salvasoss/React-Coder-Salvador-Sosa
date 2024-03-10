import React from "react";
import { ItemCount } from "../itemCount/ItemCount";
import "./itemDetail.scss"

export const ItemDetail = ({ producto }) => {

    
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

                <ItemCount stock={producto.stock} />

                <div className="itemDetailDescription">
                    <p className="itemDescriptionTitle"> DETALLE DEL PRODUCTO</p>
                    <p>  {producto.description} </p>
                    <button> Tabla de Talles</button>
                </div>
            </div>




        </div>

    )
}

