 import React from "react"; 
 import "./itemListContainer.scss";
//  //import hook 
//  import { useState } from "react";

 export const ItemListContainer = ({greeting}) => {
    
    
    return ( 
        <div className="greeting">
            <h1> {greeting}</h1>
           
        </div>
    )
}