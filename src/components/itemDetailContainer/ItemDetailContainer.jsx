import React from "react"
import { useState, useEffect } from "react"
import { ItemDetail } from "../itemDetail/ItemDetail"
import { getProducts, getOneProduct } from "../../mock/hudsonFakeApi"
import { useParams } from "react-router-dom"
import { Loader } from "../loader/Loader"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

 const ItemDetailContainer = () => {
    //usamos PARAMS para traer el id del producto del parametro de la URL que pusimos 
        const {itemId} = useParams()

    ///Ejemplo 1 usando funcion que devuelve el array de itemListContainer

    // const [producto, setProducto] = useState ({})

    const [loading, setLoading] = useState (false)

    

    // useEffect (() => {
    //     getProducts ()
    //     .then((res) => setProducto(res.find ((item) => item.id === Number(itemId))))
    //     .catch ((error) => console.log(error))
    // }, [])

    //Ejemplo 2 usando funcion para traer 1 producto por el ID

      const [producto, setProducto] = useState ({}) ///usamos {} porque estamos guardando un objeto y no un array
      

    ///Funcion que trae 1 producto, es decir, trae un objeto y no un array

    //  useEffect (() => {
    //     setLoading(true)
    //      getOneProduct (itemId)
    //      .then((res) => setProducto(res))
    //      .catch ((error) => console.log(error))
    //      .finally (() => setLoading(false))
         
    //  }, [])

     //FIREBASE 

     useEffect (() => {
        setLoading(true)
        //traer collection
        const collectionProducts = collection (db, "productos")
        // crear referencia 
        const referenciaDoc = doc (collectionProducts, itemId)

        //Traer el documento

        getDoc (referenciaDoc)
        .then ((res) => setProducto ({id:res.id, ...res.data ()}))
        .catch ((error) => console.log(error))
        .finally (() => setLoading(false))
     },[itemId])

     if (loading) {
        return <Loader/>
    }

    return (
        <div>
            <ItemDetail producto = {producto} />
        </div>
    )
}

export default ItemDetailContainer