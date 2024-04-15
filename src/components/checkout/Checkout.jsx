import React, { useContext, useState } from "react";
import "./checkout.scss";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, getDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { Link } from "react-router-dom";

export const Checkout = () => {

  
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState("")
    const { cart, cartPriceTotal, clear } = useContext(CartContext)
    const [orderId, setOrderId] = useState("")

    const userData = (e) => {
        setUser(
            {
                ...user,
                [e.target.name]: e.target.value 
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
            let order = {
                user,
                items: cart,
                total: cartPriceTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, order)
                .then((res) => {
                    cart.forEach(item => {
                        const docRef = doc(db, "productos", item.id)  
                        getDoc(docRef) 
                            .then((dbDoc) => {
                                updateDoc(docRef, { stock: dbDoc.data().stock - item.quantity }) 
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