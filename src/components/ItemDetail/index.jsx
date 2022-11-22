import React from 'react'
import ItemCount from '../ItemCount'
import { useCartContext } from '../../context/Context'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ItemDetail({data}) {
  const [goToCart,setGoToCart] = useState(false)
  const {addProduct} = useCartContext()

  const onAdd = (quantity) => {
    setGoToCart(true)
    addProduct(data,quantity)
}

  return (
<div className="sectionp1">
        < div class='container container-fluid'className="fotos">
                <div id="carouselExampleIndicators" class="carousel slide col-lg-9 mt-5 " data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={data.img} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={data.img} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src={data.img} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
        <div>
            <div className="col-lg-6 mt-5">
                <h1> {data.title} </h1>
                <p>Categoria: <span>{data.category}</span></p>

                <hr/>

                <div className="rating-outer">
                    <div className="rating-inner"></div>
                </div>
                {/* <span id="no_of_reviews">(5 Reviews)</span>

                <hr/> */}

                <h3 id="product_price"> ${data.price} </h3>
                <hr />
                {
                  goToCart
                    ? <Link to={'/cart'} className='compra'> Terminar compra</Link >
                    :<ItemCount initial={1} stock={5} onAdd={onAdd} className='roto' />
                }
                <hr/>

                <p>Seleccione el talle: 
                <select className='elegir'> 
                    <option>talle </option>
                    <option>S</option>                
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
                </p>

                <hr/>

                <h4 className="mt-2">Descripcion:</h4>
                <p className='gru'>Binge on movies and TV episodes, news, sports, music and more! We insisted on 720p High Definition for this 32" LED TV, bringing out more lifelike color, texture and detail. We also partnered with Roku to bring you the best possible content with thousands of channels to choose from, conveniently presented through your own custom home screen.</p>
                <hr/>
                <p>Sold by: <strong> VW</strong></p>
				
            </div>
        </div>
</div>    
  )
}

