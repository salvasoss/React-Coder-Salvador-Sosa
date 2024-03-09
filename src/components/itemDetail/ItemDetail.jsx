import React from "react";
import { ItemCount } from "../itemCount/ItemCount";

export const ItemDetail = ({ producto }) => {
    return (
        <div>
            <h3> Detalle de: {producto.name} </h3>
            <img src={producto.image} alt={producto.name} />
            <p> {producto.description}</p>
            <p> $ {producto.price} </p>

            <div>
                <ItemCount stock= {producto.stock}/>
            </div>

        </div>

    )
}

