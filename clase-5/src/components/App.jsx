import './App.css'
import Navbar from "./Navbar/Navbar";
import CartWidget from "./CartWidget/CartWidget";
import { Counter } from './Counter/Counter';
const App = () => {
  return (
    <>
      <Navbar/>
      <CartWidget cantCarrito={10}/>
      <Counter/>
    </>
  );
}

export default App;

