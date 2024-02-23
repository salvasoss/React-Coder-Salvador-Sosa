import "./App.scss"
import Navbar from "./components/navbar/Navbar.jsx"
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer.jsx";
function App() {
  
  return (
      <div>
        <Navbar/> 
        <ItemListContainer greeting = " Bienvenidos a Hudson Custom Garage, una marca para los apasionados del mundo motor! " />
      </div>
  );
} 

export default App;
