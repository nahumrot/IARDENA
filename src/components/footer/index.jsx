import React from 'react'

export default function index() {
  return (
    <footer className="rp">
        <div class="col">
            {/* <img src="./logo/logo.png" alt=""> */}
            <p> <strong>Forma De Entrega: </strong> Envios, Entrega En El Centro (Cordoba, Capital).</p>
            <p> <strong>Horarios: </strong> Lunes a Viernes Desde Las 9HS A 18HS Sabado Desde 10HS a 13HS.</p>
            <p> <strong>Telefono: </strong> 3512724116.</p>
            <div class="icon"> 
                <i class="bi bi-instagram p-3"></i>
                <i class="bi bi-whatsapp"></i>    
            </div>
        </div>
        <div class="col pagos">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxKvGYnfLsxtq5jipoiDk3bONxDqvckfX3S1672jXOHllT0NsRvenHI34hxbpLCSoWZE&usqp=CAU" width="50%" />
        </div>
    </footer>
  )
}
