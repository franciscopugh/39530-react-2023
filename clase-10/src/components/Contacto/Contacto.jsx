import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Contacto = () => {
    const datosFormulario = React.useRef() //Creo la referencia
    let navigate = useNavigate() //Ubicacion actual de mi componente
    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario.current) //Consulto el estado actual del formulario
        const datForm = new FormData(datosFormulario.current) //Genero un objeto iterator de esos datos
        const contacto = Object.fromEntries(datForm) //Transforma en un objeto literal
        console.log(contacto)
        e.target.reset() //Reseteo el formulario
        toast.success("Consulta recibida correctamente")
        navigate("/")//Redirijo a pagina inicial
    }
  return (
    <div className="container" style={{marginTop:"20px"}}>
        <form onSubmit={consultarFormulario} ref={datosFormulario}>
        <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
            <input type="text" className="form-control" name="nombre"/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" name="email" />
        </div>
        <div className="mb-3">
            <label htmlFor="celular" className="form-label">Numero telefonico</label>
            <input type="number" className="form-control" name="celular" />
        </div>
        <div className="mb-3">
            <label htmlFor="consulta" className="form-label">Consulta</label>
            <textarea className="form-control" name="consulta" rows={3} defaultValue={""} />
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </div>
    
  )
}