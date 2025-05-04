import React from 'react'
import Header from './components/Header/Header'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'


const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin' element={<Coin/>} />
      </Routes>
    </div>
  )
}

export default App