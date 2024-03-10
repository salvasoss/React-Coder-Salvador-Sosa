import React from "react";
import { useState } from "react";
import "./itemCount.scss";

export const ItemCount = ({ stock }) => {

    const [count, setCount] = useState(1)

    const onAdd = () => {
        console.log("Compraste un item ");
    }

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className="itemCounter-AddChart">
                <div className="itemCountContainer">
                    <button className="itemRestar" onClick={restar}>-</button>
                    <span className="count">{count}</span>
                    <button className="itemSumar" onClick={sumar}>+</button>
                </div>
                
                <div className="itemAddChartContainer"> <button disabled={stock === 0 || count === 0} onClick={onAdd}>Agregar al carrito </button> </div>
            </div>

        </>
    )
}
