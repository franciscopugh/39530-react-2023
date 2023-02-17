import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
//Componentes
import { ItemList } from '../ItemList/ItemList'

//Context
import { useDarkModeContext } from '../../context/DarkModeContext'

//Firebase
import { getProductos } from '../../firebase/firebase'

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {idCategoria}= useParams()
    const {darkMode} = useDarkModeContext()
    console.log(darkMode)
    useEffect(() => {
        if(idCategoria) {
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(idCategoria))
                const productsList = <ItemList products={products} plantilla={'item'}/> //Array de productos en JSX
                setProductos(productsList)
            })
        } else {
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0)
                const productsList = <ItemList products={products} plantilla={'item'}/> //Array de productos en JSX
                setProductos(productsList)
            })
        }
        
    }, [idCategoria])
    //[] cuando se renderiza
    //[prop] cuando se renderiza y cuando se actualiza
    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    )
}