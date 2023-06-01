import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import './styles/Navbar.css'


const Navbar = (props) => {
    const navigate=useNavigate()
    const cerrarsesion=()=>{
        auth.signOut()
        .then(()=>{
            navigate('/login')
        })
    }
  return (
    
    <nav class="navbar navbar-danger bg-dark">
       <div class="container-fluid">
        <Link className='navbar-brand' to="/"><img src="./Logo.jpeg" width="40" height="40" ></img></Link>

        <div className='d-flex '>
            <Link className='btn btn-dark' to="/">Inicio</Link>
            
          

        {props.firebaseUser !== null   ? (
          <Link className='btn btn-dark' to="/libros">Habitaciones</Link>
        ) : null}

          {props.firebaseUser !== null  ?  (
          <Link className='btn btn-dark' to="/admin">Reservas</Link>
        ) : null}

        {
          props.firebaseUser !== null ? (
            <button className='btn btn-dark iniciar-cerrarsesion'
              onClick={cerrarsesion}
            >Cerrar Sesión</button>
          ) : (
            <Link className='btn btn-dark' to="/login">Login</Link>
          )
        }
        </div>
        </div>
        </nav>
  )
}

export default Navbar