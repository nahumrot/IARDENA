import React from 'react'
import Item from '../Item'


export default function ItemList({data= []}) {
  return (
    <div className='bcard'>

      {data.map((electro) => <Item key = {electro.id} info={electro}/>)}

    </div>
    
    
  )
}
