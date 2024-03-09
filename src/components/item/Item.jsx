import React from "react";
import "./item.scss";
import { NavLink } from "react-router-dom";

export const Item = ({product}) => {
    return (
        <div className="itemCard"> 
            <img src={product.image} alt={product.name} className="cardImageTop"/>
            <div className="cardBody">
                <h4 className="cardTitle"> {product.name}</h4>
                <p > ${product.price}</p>
                <NavLink to= {`/item/${product.id}` }> Ver mas</NavLink>
            </div>
        </div>
    )
}