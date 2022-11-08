import {NavLink} from 'react-router-dom'
import React from 'react'
// import imagen from '../../../imagen/logo'

export default function NavBar() {
 
  return (
    <nav class="navbar bg-light fixed-top" id="alto">
    <div class="container-fluid">
      <NavLink class="navbar-brand" id="my_shop"  to='/'>
         I A R D E N A 
         {/* <img src={imagen} alt="" srcset="" /> */}
         </NavLink>
      <div className="cart">
             <span>
               <i className="bi bi-cart3"></i>
             </span>
             <span>{0}</span>
          </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel"> I A R D E N A</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <NavLink class="nav-link active" aria-current="page" to='/'>Inicio</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/contacto" class="nav-link">Contacto</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/politica" class="nav-link">Politica De Devolcion</NavLink>
            </li>
            <li class="nav-item dropdown">
              <NavLink class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Vestidos
              </NavLink>
              <ul class="dropdown-menu">
                <NavLink to='/categoria/vestidoslisos'  class="dropdown-item" > Lisos </NavLink>
                <hr/>
                <NavLink to='/categoria/vestidoscombinados'  class="dropdown-item"> Diseno </NavLink>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

