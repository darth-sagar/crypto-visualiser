import React from 'react'
import Header from './components/Header/Header'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Coin from './pages/Coin/Coin'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:coinId' element={<Coin/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
