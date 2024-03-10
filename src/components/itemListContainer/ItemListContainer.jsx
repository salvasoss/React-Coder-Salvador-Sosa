 import React from "react"; 
 import "./itemListContainer.scss";
 import { useState, useEffect } from "react";
 import { getProducts } from "../../mock/hudsonFakeApi";
  import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router-dom";
  

 export const ItemListContainer = ({greeting}) => {
    const {categoryId} = useParams ()
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (false)

    useEffect (() => {
        setLoading(true)
        getProducts ()
        .then ((res) =>{
            if (categoryId){
                setProducts(res.filter ((products) => products.category === categoryId))
            }else {
                setProducts(res)
            }
        })
        .catch ((error) => console.log(error, "Error"))
        .finally (() => setLoading(false))
    }, [categoryId]) //array de dependencias: solo se ejecuta la promesa cuando aparezca categoryID
    
    if (loading) {
        return <h2 style={{fontWeight : "bold", fontSize : "2rem", textAlign: "center"} }> CARGANDO...</h2>
    }
    return ( 
        <div className="greeting">
            {
                categoryId 
                ?  <h1> {greeting} <span> {categoryId}</span></h1>
                : <h1> {greeting} </h1>
            }
           
            <ItemList products = {products}/> 
        </div>
    )
}