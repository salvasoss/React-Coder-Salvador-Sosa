import "./App.scss"
import NavBar from "./components/navbar/NavBar.jsx"
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Form } from "./components/form/Form.jsx"
import { CartProvider } from "./context/CartContext.jsx";
import { Cart } from "./components/cart/Cart.jsx";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Hudson Custom Garage, una marca para los apasionados del mundo motor!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoria: " />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Form />} />
          <Route path = "/carrito" element = {<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

