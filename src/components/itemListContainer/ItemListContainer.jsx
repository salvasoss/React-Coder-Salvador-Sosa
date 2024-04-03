import React from "react";
import "./itemListContainer.scss";
import { useState, useEffect } from "react";
import { getProducts } from "../../mock/hudsonFakeApi";
import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";


export const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     getProducts()
    //         .then((res) => {
    //             if (categoryId) {
    //                 setProducts(res.filter((products) => products.category === categoryId))
    //             } else {
    //                 setProducts(res)
    //             }
    //         })
    //         .catch((error) => console.log(error, "Error"))
    //         .finally(() => setLoading(false))
    // }, [categoryId]) //array de dependencias: solo se ejecuta la promesa cuando aparezca categoryID


    //Firebase!!!!!!!

    useEffect(() => {
        setLoading(true)
        //Conectarnos con nuestra collection
        const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos")
        //Metodo/funcion para pedir documentos dentro de la collection, DEVULEVE UNA PROMESA    
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

            <ItemList products={products} />

        </div>
    )
}