import './App.css'
//Componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer/>
    </>
  );
}

export default App;

