import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (props) => {
  return (
    <h2 className='saludo' > {props.greeting} </h2>
  )
}

export default ItemListContainer