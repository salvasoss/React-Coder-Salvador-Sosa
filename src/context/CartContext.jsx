import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart, setCart]= useState([])

    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
           
            const nuevoCarrito = cart.map ((compra) => {
                if (compra.id === item.id){ 
                    return {
                        ...compra, quantity: compra.quantity + quantity 
                    }
                } else {
                    return compra 
                }
            })

            setCart (nuevoCarrito)
        }else{
            setCart([...cart,{...item, quantity}])
        }
    }

    const clear = () =>{
        setCart([])
    }

    const removeItem = (itemId)=>{
        setCart(cart.filter((compra)=> compra.id !== itemId))
    }

    const isInCart = (itemId)=>{
        return cart.some((compra)=> compra.id === itemId)
    }

    const cartQuantity = () => {
        return cart.reduce ((acum, compra) => acum += compra.quantity, 0)
    }

    const cartPriceTotal = () => {
        return cart.reduce ((acum, compra) => acum += (compra.quantity * compra.price), 0)
    }
    return(
        <CartContext.Provider value={{cart,addItem, clear, removeItem, isInCart, cartQuantity, cartPriceTotal}}>
            {children}
        </CartContext.Provider>
    )
}