import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemLIstContainer'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos!!!"/>
    </>
  )
}

export default App
