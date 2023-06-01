import React from "react";

import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'


const Habitacion = () => {
  return (
    <div className='container'>
    
    
    <section class="room-section">
      <div class="room-card">
        <img src="Individual.jfif" alt="Habitación Individual"></img>
        <h2>Habitación doble</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sapien vel nulla faucibus efficitur. Ut semper elit vel lorem consectetur fermentum.</p>
        <Link className='navbar-brand' to="/admin">
        <button>Reservar ahora</button>
         </Link>
          
       
      </div>
      
      <div class="room-card">
        <img src="doble.jfif" alt="Habitación Doble"></img>
        <h2>Habitación Familiar</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sapien vel nulla faucibus efficitur. Ut semper elit vel lorem consectetur fermentum.</p>
        <Link className='navbar-brand' to="/admin">
        <button>Reservar ahora</button>
         </Link>
      </div>
      
      <div class="room-card">
        <img src="Suit.jfif" alt="Suit Presidencial"></img>
        <h2>Suit Presidencial</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac sapien vel nulla faucibus efficitur. Ut semper elit vel lorem consectetur fermentum.</p>
        <Link className='navbar-brand' to="/admin">
        <button>Reservar ahora</button>
         </Link>
      </div>
    </section>
    


  </div>
  )
}

export default Habitacion;
