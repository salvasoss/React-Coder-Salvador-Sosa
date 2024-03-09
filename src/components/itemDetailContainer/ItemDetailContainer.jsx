import React from "react"
import { useState, useEffect } from "react"
import { ItemDetail } from "../itemDetail/ItemDetail"
import { getProducts, getOneProduct } from "../../mock/hudsonFakeApi"
import { useParams } from "react-router-dom"

 const ItemDetailContainer = () => {
    //usamos PARAMS para traer el id del producto del parametro de la URL que pusimos 
   

    ///Ejemplo 1 usando funcion que devuelve el array de itemListContainer

    const [producto, setProducto] = useState ({})

    const {itemId} = useParams()
    

    useEffect (() => {
        getProducts ()
        .then((res) => setProducto(res.find ((item) => item.id === itemId)))
        .catch ((error) => console.log(error))
    }, [])

    //Ejemplo 2 usando funcion para traer 1 producto por el ID

    //  const [producto, setProducto] = useState ({}) ///usamos {} porque estamos guardando un objeto y no un array

    ///Funcion que trae 1 producto, es decir, trae un objeto y no un array

    //  useEffect (() => {
    //      getOneProduct ()
    //      .then((res) => setProducto(res.find ((item) => item.id === itemId)))
    //      .catch ((error) => console.log(error))
    //  }, [])

    

    return (
        <div>
            <ItemDetail producto = {producto} />
        </div>
    )
}

export default ItemDetailContainer