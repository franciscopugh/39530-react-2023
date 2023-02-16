import { Link } from "react-router-dom";
import React from "react";
const Categorias = React.memo(() => {
    return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-dark">Categorias</button> 
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/1"}>Computadoras</Link></li>
            <li><Link className="dropdown-item" to={"/category/2"}>Celulares</Link></li>
            <li><Link className="dropdown-item" to={"/category/3"}>Televisores</Link></li>
            <li><Link className="dropdown-item" to={"/category/4"}>Electronica</Link></li>
          </ul>
        </li>
    );
})

export default Categorias;
