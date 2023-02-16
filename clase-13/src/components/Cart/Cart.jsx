import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
export const Cart = () => {
    const carrito = [
        {id: 1, nombre: "Arroz", modelo: "1", img: 'https://firebasestorage.googleapis.com/v0/b/react-39530-2023.appspot.com/o/xiaomi-mi-9.jpg?alt=media&token=e06258eb-5631-400b-ab66-93702850c699', precio: 400, cantidad: 5 },
        {id: 2,nombre: "Fideos", modelo: "2", img: 'https://firebasestorage.googleapis.com/v0/b/react-39530-2023.appspot.com/o/xiaomi-mi-9.jpg?alt=media&token=e06258eb-5631-400b-ab66-93702850c699',precio: 300, cantidad: 2 },
        {id: 3,nombre: "Manteca", modelo: "3",img: 'https://firebasestorage.googleapis.com/v0/b/react-39530-2023.appspot.com/o/xiaomi-mi-9.jpg?alt=media&token=e06258eb-5631-400b-ab66-93702850c699',precio: 500, cantidad: 3 },
    ]
    return(
        <>
            { carrito.length === 0 
              ? //Si carrito esta vacio
                <>
                    <h2>Carrito vacio</h2>
                    <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link> 
                </>
              : //Si carrito tiene productos
                <div className="container cartContainer">
                    {<ItemList products={carrito} plantilla={'itemCart'}/>}
                    <div className="divButtons">
                        <p>Resumen de la compra: precio total</p>
                        <button className="btn btn-danger">Vaciar carrito</button>
                        <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link> 
                        <Link className="nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar compra</button></Link> 
                    </div>
                </div>
            }
        </>
    )
   
}

/*
    Condicional 1 = 6 complejidad, 2 return y 1 condicional
    if(false) {
        return <p>Es verdadero</p>;
    } 
    return <p>Es falso</p>;

    -----------------
    Condicional 2 = 6 complejidad, 1 return y 2 condicionales
    const condLogica = false
    return(
        <>
        {condLogica && <p>Es verdadero</p>  }
        {!condLogica && <p>Es falso</p>  }
        </>

    )
    ------------
    Condicional 3 = 5 complejidad, 1 return y 1 condicional
    const condLogica = false
    return(
        <>
            {condLogica ? <p>Es verdadero</p> : <p>Es falso</p>}
        </>
    )

*/