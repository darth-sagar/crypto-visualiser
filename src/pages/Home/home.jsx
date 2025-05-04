import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className="hero-page">
        <div className="hero-text flex flex-col items-center justify-center">
          <h1 className='text-5xl font-bold'>Welcome to VizCrypto</h1>
          <p className='text-xl'>Your one-stop solution for all crypto needs</p>
          <p className='text-xl'>Get the latest news, prices, and trends in the crypto world</p>
          <form action="">
            <input type="text" placeholder='Search for a coin...' className='search-input' />
            <button className='search_button'>&#128269;</button>
          </form>
        </div>
        <div className="input_form">
          
        </div>
      </div>
    </div>
  )
}

export default Home