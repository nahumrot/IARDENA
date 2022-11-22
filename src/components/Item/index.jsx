import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../../context/Context'


export default function Item({info}) {

  const nombre = useContext(Context)
  console.log ('Item', nombre)



  return (
    <div className="hola">
    <div className="flec-container">
        <div className="card"> 
          <div className="card-img">
          <Link to={`/detalle/${info.id}`} >
            <img src={info.img} alt="" width={265} height={300} className="ji"/>
            </Link>
          </div>
          <div className="card-body">
            <h2 className="titulo">{info.title}</h2>
            <p className="descripcion">{info.author}</p>
          </div>
          <div className="price-section">
            <div className="tamano">
              <span>{info.sizes.s}</span>
              <span>{info.sizes.m}</span>
              <span>{info.sizes.l}</span>
              <span>{info.sizes.xl}</span>
            </div>
            <div className="price">
              <span className="peso">{info.currency}</span>
              <h3>{info.price}</h3>
            </div>
          </div>
          <div className="cta-group">
          <button className="carro" >Agregar al carrito</button>
          </div>
        </div>
      </div>
 </div>
  )
}


