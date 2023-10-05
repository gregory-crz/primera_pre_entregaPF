import React from 'react'
import './CardWidget.css'

const CardWidget = () => {
    const imgCarro = "https://us.123rf.com/450wm/yupiramos/yupiramos1609/yupiramos160915888/62576360-carrito-de-compras-carro-de-supermercado-sobre-fondo-rojo-ilustraci%C3%B3n-vectorial.jpg"
  
  return (
    <div>
        <img className='imgCarro' src={imgCarro} alt="Imagen carro de compras" />
        <strong className='numeroCompras' >5</strong>        
    </div>
  )
}

export default CardWidget