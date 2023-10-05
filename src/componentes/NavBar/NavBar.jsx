import React from 'react'
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'

const NavBar = () => {
  return (
    <header>
        <h1 className='titulo' >Super Cool</h1>
        <nav>
            <ul>
                <li>Bebidas</li>
                <li>Licores</li>
                <li>Lacteos</li>
            </ul>
        </nav>
        <CardWidget/>
    </header>
  )
}

export default NavBar