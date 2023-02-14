import { Link } from "react-router-dom"
//Context
import { useDarkModeContext } from "../../context/DarkModeContext"

export const Item = ({item}) => {
  const {darkMode} = useDarkModeContext()

  return (                                    //Si es verdadero aplico las primeras clases, sino la ultima
    <div className={`card mb-3 cardProducto ${darkMode ? 'text-white bg-secondary' : 'border-light'}`}>
        <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
            <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody'}`}>
                <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                <p className="card-text">{item.marca}</p>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <button className={`btn ${darkMode ? 'btn-primary' : 'btn-secondary'}`}><Link className="nav-link" to={`/item/${item.id}`}>Ver Producto</Link></button>
            </div>
      </div>

  )
}