import { useState } from "react"

export const Counter = () => {
    
    const [contador, setContador] = useState(0)
            //Var       //Modificar var     //Estado inicial

    const sumar = () =>  setContador(contador + 1) //contador = contador + 1
    const restar = () => setContador(contador - 1)


  return (
    <>
        <button className="btn btn-dark" onClick={() => sumar()}>+</button>
            {contador}
        <button className="btn btn-light" onClick={() => restar()}>-</button>
    </>
  )
}