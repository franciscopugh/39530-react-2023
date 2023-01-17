import './App.css'
import Navbar from "./Navbar/Navbar";
import CartWidget from "./CartWidget/CartWidget";
const App = () => {
  return (
    <>
      <Navbar/>
      <CartWidget cantCarrito={10}/>
    </>
  );
}

export default App;

