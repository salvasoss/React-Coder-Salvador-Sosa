import React from "react";
import { Item } from "../item/Item";
import "./itemList.scss";

 export const ItemList = ({products}) => {
    return (
        <div className="itemListContainer">
            {products.map ((product) => <Item key = {product.id} product = {product}/> )}
        </div>
    )
}