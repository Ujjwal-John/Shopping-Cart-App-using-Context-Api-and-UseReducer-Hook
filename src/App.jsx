import React, { Suspense, lazy} from 'react'
import Header from './components/Header'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// Lazy loading components
const Home = lazy(()=> import('./components/Home'));
const Cart = lazy(()=> import('./components/Cart'));


const App = () => {
  return (
    <div className='app'>
      <BrowserRouter basename='/Shopping-Cart-App-using-Context-Api-and-UseReducer-Hook'>
      <Header/>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Suspense>
      </BrowserRouter>  
    </div>
  )
}

export default App
