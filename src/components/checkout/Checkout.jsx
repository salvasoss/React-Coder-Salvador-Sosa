import React, { useContext, useState } from "react";
import "./checkout.scss";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, getDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { Link } from "react-router-dom";

export const Checkout = () => {

    //funcion dinamica
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState("")
    const { cart, cartPriceTotal, clear } = useContext(CartContext)
    const [orderId, setOrderId] = useState("")

    const userData = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value // [clave]:valor 
            }
        )
    }


    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!user.name || !user.lastname || !user.email || !user.phone) {
            alert("Los campos son obligatorios")
        } else if (user.email !== validateEmail) {
            alert("Los mails deben ser iguales")
        } else {

            //objeto de la orden
            let order = {
                user,
                items: cart,
                total: cartPriceTotal(),
                date: serverTimestamp()
            }
            //nuestra coleccion
            const ventas = collection(db, "orders")
            //agregamos la coleccion
            addDoc(ventas, order)
                .then((res) => {
                    //actualizar el stock
                    cart.forEach(item => {
                        const docRef = doc(db, "productos", item.id)  //traer un documento de firebase: (db, coleccion, producto a cambiar) 
                        getDoc(docRef) //item traido de la coleccion
                            .then((dbDoc) => {
                                updateDoc(docRef, { stock: dbDoc.data().stock - item.quantity }) //actualizacion del stock del item 
                            })
                    })
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => console.log(error))
        }
    }
    return (
        <div>
            {
                orderId !== ""
                    ? <div>
                        <h3> Compraste con exito! </h3>
                        <h5> tu orden es: {orderId}</h5>
                        <Link to="/"> Volver a navegar </Link>
                    </div>
                    :
                    <div>
                        <h4> Completa el formulario con tus datos</h4>
                        <form className="form" onSubmit={finalizarCompra}>
                            <input type="text" name="name" placeholder="Ingrese su nombre" onChange={userData} />
                            <input type="text" name="lastname" placeholder="Ingrese su apellido" onChange={userData} />
                            <input type="number" name="phone" placeholder="Ingrese su telefono" onChange={userData} />
                            <input type="email" name="email" placeholder="Ingrese su correo" onChange={userData} />
                            <input type="email" name="second-email" placeholder="Repita su correo" onChange={(e) => setValidateEmail(e.target.value)} />


                            <button className="submit" type="submit" > Enviar </button>
                        </form>
                    </div>
            }
        </div>
    )

}