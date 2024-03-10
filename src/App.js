import "./App.scss"
import NavBar from "./components/navbar/NavBar.jsx"
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a Hudson Custom Garage, una marca para los apasionados del mundo motor!" />} />
          <Route path= "/category/:categoryId" element = {<ItemListContainer greeting = "Categoria: " />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path="/contacto" element= { <h1 style={{textAlign : "center", fontSize : "2rem"}}> En construccion...</h1>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;

