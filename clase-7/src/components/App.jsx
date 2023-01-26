import './App.css'
//Componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;

