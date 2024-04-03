import { createContext, useState } from "react";

//crear el contexto
export const CartContext = createContext()

//creamos el proveedor del contexto
export const CartProvider = ({children}) =>{
    const [cart, setCart]= useState([])
    console.log(cart)

    
    // agregar cierta cantidad de un ítem al carrito
    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
            //Aca se tienen que sumar cantidades
            const nuevoCarrito = cart.map ((compra) => {
                if (compra.id === item.id){ //buscamos el item que se repite
                    return {
                        ...compra, quantity: compra.quantity + quantity // suma cantidad vieja (compra.quantity) con nueva (quantity)
                    }
                } else {
                    return compra //devuelve el producto como estaba
                }
            })
            //guardamos en cart
            setCart (nuevoCarrito)
        }else{
            setCart([...cart,{...item, quantity}])
        }
    }

    // Remover todos los items
    const clear = () =>{
        setCart([])
    }

    // Remover un item del cart por usando su id
    const removeItem = (itemId)=>{
        //mas largo
        // const limpiarCarrito = cart.filter((compra)=> compra.id !== itemId)
        // setCart(limpiarCarrito)
        //se puede hacer en una linea
        setCart(cart.filter((compra)=> compra.id !== itemId))
    }

    //si el producto esta en el carrito (true/false)
    const isInCart = (itemId)=>{
        return cart.some((compra)=> compra.id === itemId)
    }

    //suma el total de cantidades
    const cartQuantity = () => {
        return cart.reduce ((acum, compra) => acum += compra.quantity, 0)
    }

    //suma el total a pagar
    const cartPriceTotal = () => {
        return cart.reduce ((acum, compra) => acum += (compra.quantity * compra.price), 0)
    }
    return(
        // le asiganmos el contexto que provee
        <CartContext.Provider value={{cart,addItem, clear, removeItem, isInCart, cartQuantity, cartPriceTotal}}>
            {children}
        </CartContext.Provider>
    )
}