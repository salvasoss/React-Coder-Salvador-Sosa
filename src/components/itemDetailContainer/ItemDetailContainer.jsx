import React from "react"
import { useState, useEffect } from "react"
import { ItemDetail } from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { Loader } from "../loader/Loader"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = () => {
    const { itemId } = useParams()

    const [loading, setLoading] = useState(false)

    const [producto, setProducto] = useState({}) 
    const [validateItem, setValidateItem] = useState (false)

    useEffect(() => {
        setLoading(true)
   
        const collectionProducts = collection(db, "productos")

        const referenciaDoc = doc(collectionProducts, itemId)

        getDoc(referenciaDoc)
            .then((res) => {
                if (res.data()){
                    setProducto({ id: res.id, ...res.data() })
                } else {
                    setValidateItem (true)
                }
                
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [itemId])

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            {validateItem ? <p> El producto no existe </p> : <ItemDetail producto={producto} /> }
        </div>
    )
}

export default ItemDetailContainer