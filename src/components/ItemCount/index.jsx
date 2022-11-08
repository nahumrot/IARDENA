import React,{useState, useEffect} from 'react'

export default function ItemCount({initial, stock, onAdd}) {
    const [count, setCount] = useState(parseInt(initial));

    const decrece = () => {
        setCount(count -1);
    }
    const crece = () => {
        setCount(count+1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

  return (
    // <div className='counter'>
    //     <button className="btn btn-danger minus" disabled= {count <= 1} onClick={decrece}>-</button>
    //     <span>{count}</span>
    //     <button className="btn btn-primary plus"   disabled= {count >= stock} onClick={crece}>+</button>
    //     <div>
    //         <button disabled={stock <= 0 } onClick={() => onAdd (count)} > Agregar al carrito</button>
    //     </div>
    // </div>

    <div className="">
        <div className='count'>
            <button className="btn btn-danger minus" disabled= {count <= 1} onClick={decrece}>-</button>
            <div className='numero'>

                 <span>{count}</span> 

            </div>
            <button className="btn btn-success plus"  disabled= {count >= stock} onClick={crece}>+</button>
        </div>
               
        <div className='cart'>
             <button type="button" id="cart_btn" className="btn btn-dark d-inline ml-4" disabled={stock <= 0 } onClick={() => onAdd (count)}> Agregar al carrito </button>
        </div>
            

        
    </div>
        
    )
}


