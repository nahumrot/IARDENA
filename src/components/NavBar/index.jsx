import {NavLink} from 'react-router-dom'
import React from 'react'
import Imagen from '../../asset/imagen/logo.png'
import { useContext } from 'react'
// import { CartContext } from '../../context/Context'



export default function NavBar() {
  // const {totalProducts} = useContext(CartContext)
  return (
    <nav class="navbar bg-light fixed-top" id="alto">
    <div class="container-fluid">
      <NavLink class="navbar-brand" id="my_shop"  to='/'>
         {/* I A R D E N A  */}
         <img src={Imagen} alt="" srcset="" className='logo'/>
         </NavLink>
      <div className="cart">
             <NavLink to="/cart">
               <i className="bi bi-cart3"></i>
             </NavLink>
             {/* <span>{totalProducts}</span> */}
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
              <NavLink class="nav-link active" aria-current="page" to='/' className="lo">Inicio</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/contacto" class="nav-link" className="lo" >Contacto</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/politica" class="nav-link" className="lo" >Politica De Devolcion</NavLink>
            </li>
            <li class="nav-item dropdown">
              <NavLink class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
              <i class="bi bi-caret-down-fill"  >Vestidos</i>
              </NavLink>
              <ul class="dropdown-menu">
                <NavLink to='/categoria/vestidos liso'  class="dropdown-item" className="lo" > Lisos </NavLink>
                <hr/>
                <NavLink to='/categoria/vestidos combinado'  class="dropdown-item" className="lo"> Combinados </NavLink>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  )
}

