import React, { useState } from "react";

 export const Form = () => {

    
    const [name,setName] = useState ("")
    const [email,setEmail] = useState ("")

    const capturarNombre = (e) => {
        setName (e.target.value)
    }

    const enviarDatos = (e) => {
        e.preventDefault ()
        console.log(
            {
                nombreCompleto: name,
                correo: email   
            }
        );
    }

    const inputAvoid = (e) => {
        if ("a" === e.key.toLowerCase() || "e" === e.key.toLowerCase() || "i" === e.key.toLowerCase() || "o" === e.key.toLowerCase() || "u" === e.key.toLowerCase()){
            e.preventDefault ()
            alert ("PROHIBIDO INGRESAR VOCALES")
        } else {
            console.log(e);
        }
    }
    return(
        <div>
            <h1> Form</h1>
            <form onSubmit={enviarDatos} >  
                <input type="text" placeholder="Nombre" onKeyDown={inputAvoid}/>
                <input type="text" placeholder="Nombre Completo" />
                <input type="email"  placeholder="Email" onChange={ (e) => setEmail (e.target.value)}/>
                <input type="number" placeholder="Telefono" />
                <button type="submit" > Enviar </button>
            </form>
            
        </div>
    )
}