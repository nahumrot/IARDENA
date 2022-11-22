import React from 'react'
import Imagen from '../../asset/imagen/logo.png'

export default function index() {
  return (
    // <footer className="rp">
    //     <div class="col">
    //         {/* <img src="./logo/logo.png" alt=""> */}
    //         <p> <strong>Forma De Entrega: </strong> Envios, Entrega En El Centro (Cordoba, Capital).</p>
    //         <p> <strong>Horarios: </strong> Lunes a Viernes Desde Las 9HS A 18HS Sabado Desde 10HS a 13HS.</p>
    //         <p> <strong>Telefono: </strong> 3512724116.</p>
    //         <div class="icon"> 
    //             <i class="bi bi-instagram p-3"></i>
    //             <i class="bi bi-whatsapp"></i>    
    //         </div>
    //     </div>
    //     <div class="col pagos">
    //         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxKvGYnfLsxtq5jipoiDk3bONxDqvckfX3S1672jXOHllT0NsRvenHI34hxbpLCSoWZE&usqp=CAU" width="50%" />
    //     </div>
    // </footer>
    <footer class="pie-pagina">
    <div class="grupo-1">
        <div class="box">
            <figure>
                <a href="#">
                    <img src={Imagen} alt="" className='foooter'/>
                </a>
            </figure>
        </div>
        <div class="box">
            <h2>SOBRE NOSOTROS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
        </div>
        <div class="box">
            <h2>SIGUENOS</h2>
            <div class="red-social">
                <a href="#" class="bi bi-facebook"></a>
                <a href="#" class="bi bi-instagram"></a>
                <a href="#" class="bi bi-bi bi-whatsapp"></a>
                {/* <a href="#" class="bi bi-youtube"></a> */}
            </div>
        </div>
    </div>
    <div class="grupo-2">
        <small>&copy; 2022 <b>Hecho</b> - Por El Crack NujeeeLee.</small>
    </div>
</footer>
  )
}
