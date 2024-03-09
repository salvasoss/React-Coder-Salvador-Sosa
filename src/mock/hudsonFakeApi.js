
    const products = [
        {id: 1,
         name: "Remera JPS",
         stock: 20,
         price: 15000, 
         description: "Remera John Player Special Team Lotus, 100% algodon peinado y calidad de estampa altisima",
         image: "../img/remera negra JSP.jpg", 
         categoria: "destacados" }, 
    
        {id: 2,
         name: "Remera Aguila",
         stock: 24,
         price: 15000, 
         description: "Remera Hudson Custom Motorcycle, 100% algodon peinado y calidad de estampa altisima",
         image: "../img/aguila atras.jpg", 
         categoria: "destacados" },  
         {
            id: 3,
            name: "Remera Camel",
            Stock: 0,
            price: 20000,
            description: "Remera Camel cigarrillos, un clasico de Hudson realmente exclusivo y que no salio oficialmente a la venta",
            image: "../img/remera negra camel atras.jpg", 
            categoria: "productos",
         },

         {
            id: 4,
            name: "Remera Calavera",
            Stock: 0,
            price: 20000,
            description: "Remera Calavera Motorcycle, un clasico de Hudson realmente exclusivo y que no salio oficialmente a la venta",
            image: "../img/remera negra calavera atras.jpg", 
            categoria: "productos",
         }
    ]

   export const getProducts = () => {
      return new Promise ((resolve, reject) => {
         let error = false;
         setTimeout (() => {
            if (error) {
               reject ("Hubo un error, intente mas tarde")
            } else {
               resolve (products)
               
            }
         })
      }, 2000)
   }

   
   export const getOneProduct = (id) => { //id= parametro a ingresar en la promesa
      let error = false
      return new Promise ((resolve, reject) => {
         setTimeout (() => {
            if (error) {
               reject ("Error!")
            }else {
               let product = products.find ((item) => item.id === id) 
               resolve (product)
            }
         }, 2000)
      })
   }
