 import React from "react"; 
 import "./itemListContainer.scss";
 import { useState, useEffect } from "react";
 import { getProducts } from "../../mock/hudsonFakeApi";
  import { ItemList } from "../itemList/ItemList";

 export const ItemListContainer = ({greeting}) => {
    
    const [products, setProducts] = useState ([])

    useEffect (() => {
        getProducts ()
        .then ((res) => setProducts(res))
        .catch ((error) => console.log(error, "Error"))
    }, [])
    
    return ( 
        <div className="greeting">
            <h1> {greeting}</h1>
            <ItemList products = {products}/> 
        </div>
    )
}