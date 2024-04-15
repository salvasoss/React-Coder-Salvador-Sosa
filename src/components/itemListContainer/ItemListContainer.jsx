import React from "react";
import "./itemListContainer.scss";
import { useState, useEffect } from "react";
import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase"; 
// import { productsData } from "../../mock/hudsonFakeApi"; //agragar dinamicamente productos a firebase

export const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos")
        getDocs(productsCollection)
            .then((res) => {
                const list = res.docs.map((producto) => {
                    return {
                        id: producto.id,
                        ...producto.data()
                    }
                })
                setProducts(list)
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [categoryId])

    /// agregar dinamicamente productos del mock a FIREBASE
    // const addProducts = () => {
    //     const coleccionProductos = collection (db, "productos" ) // coleccion a la que le voy a agregar los productos
    //     productsData.map ((item) => addDoc (coleccionProductos, item))
    // }

    if (loading) {
        return <Loader />
    }

    return (
        <div className="greeting">

            {
                categoryId
                    ? <h1> {greeting} <span> {categoryId}</span></h1>
                    : <h1> {greeting} </h1>
            }
    
        {/* <button onClick={addProducts} className="addProdFirebase"> Agregar productos a FIREBASE</button> */} 
            <ItemList products={products} />

        </div>
    )
}