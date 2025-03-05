import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import { Routes,Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Product from './components/Product'
import ProductDetails from './components/ProductDetails'
import PageNotFound from './components/PageNotFound'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar>

    </NavBar>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/product' element={<Product />}></Route>
      <Route path='/productDetails/:id' element={<ProductDetails />}></Route>
      <Route path='/home' element={<Navigate to="/" />}></Route>
      <Route path='*' element={<PageNotFound />}>

      </Route>
    </Routes>
    </>
  )
}

export default App
