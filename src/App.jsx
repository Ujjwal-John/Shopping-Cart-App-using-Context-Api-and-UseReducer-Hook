import React from 'react'
import Header from './components/Header'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'


const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>

      </BrowserRouter>
      
    </div>
  )
}

export default App
