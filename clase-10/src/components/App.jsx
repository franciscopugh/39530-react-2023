import './App.css'
import 'react-toastify/dist/ReactToastify.css'

//Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Toastify
import { ToastContainer } from 'react-toastify';

//Componentes
import Navbar from "./Navbar/Navbar";
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Contacto } from './Contacto/Contacto';

//Context
import { DarkModeProvider } from '../context/DarkModeContext';

const App = () => {
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
          </Routes> 
          <ToastContainer/>
      </DarkModeProvider>
    </BrowserRouter>
      
    </>
  );
}

export default App;

