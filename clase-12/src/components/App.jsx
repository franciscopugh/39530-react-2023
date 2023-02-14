import './App.css'
import 'react-toastify/dist/ReactToastify.css'

//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Toastify
import { ToastContainer } from 'react-toastify';

import { cargarBDD } from '../firebase/firebase';

//Componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './Contacto/Contacto';
import { Cart } from './Cart/Cart';
//Context
import { DarkModeProvider } from '../context/DarkModeContext';

const App = () => {

  //cargarBDD()
  return (
    <>

    <BrowserRouter>
      <DarkModeProvider>
        <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/> 
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
            <Route path='/contacto' element={<Contacto/>}/> 
            <Route path='/cart' element={<Cart/>}/>
          </Routes> 
          <ToastContainer/>
      </DarkModeProvider>
    </BrowserRouter>
      
    </>
  );
}

export default App;

