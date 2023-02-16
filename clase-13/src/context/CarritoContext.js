import { useContext, createContext, useState } from "react";

const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    //Si existe producto en el carrito
    const isInCart = (id) => {
        //Si existe, me lo devuelve. Si no existe, me retorna undefined
        return carrito.find(prod => prod.id === id)
    }

    //Agregar producto
    const addItem = (producto, cantidad) => {
        if(isInCart(producto.id)) { //Reemplazo la cantidad de productos
            const indice = carrito.findIndex(prod => prod.id === producto.id)
            const aux = [...carrito]
            aux[indice].cant = cantidad
            setCarrito(aux)
        } else { //Creo el objeto producto en carrito con los datos ingresados
            const prodCart ={
                ...producto, 
                cant: cantidad
            }
            /*
                const aux = [...carrito]
                aux.push(prodCart)
                setCarrito(aux)
            */
            setCarrito([...carrito, prodCart])

        }
    }
    //Vaciar carrito
    const emptyCart = () => {
        setCarrito([])
    }

    //Eliminar producto
    const removeItem = (id) => {
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    //Cantidad total de productos en carrito
    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.cant, 0)
    }

    //Precio total de la compra
    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.cant * prod.precio), 0)
    }
    console.log(carrito)

    return (
        <CarritoContext.Provider value={{carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
                {props.children}
        </CarritoContext.Provider>
    )

}