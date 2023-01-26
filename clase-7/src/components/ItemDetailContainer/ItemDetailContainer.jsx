import {useState,useEffect} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    useEffect(() => {
        fetch('./json/productos.json')
        .then(response => response.json())
        .then(products => {
            const item = products.find(prod => prod.id === 3)
            setProducto(item)
        })
    }, [])
    return (
        <div className='card mb-3 container itemDetail'>
            <ItemDetail item={producto}/>
        </div>
    )
}