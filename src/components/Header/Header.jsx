import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
    
  return (
    <div className='header flex items-center justify-between shadow-md '>

        <div className='logo flex items-center justify-center'>
            <img src={logo} alt="" className='w-11'/>
            <h3 className='name'>VizCrypto</h3>
        </div>
        <div className='header-links flex items-center justify-between'>
            <div className='links flex items-center justify-center'>
                <a href="#">Home</a>
                <a href="/about">Features</a>
                <a href="/contact">Market</a>
                <a href="/about">Blog</a>
            </div>
            <div className="dropdown flex items-center ">
                <select name="" id="">
                    <option value="inr">INR</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                </select>
            </div>
            <div className='buttons-auth'>
                <button className='login auth'>Login</button>
                <button className='signup auth'>Sign Up</button>
            </div>
        </div>
        
    </div>
  )
}

export default Header