import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <>
   <ChakraProvider>
    <NavBar />
    <ItemListContainer />
   </ChakraProvider> 
   </>
  )
}
export default App
