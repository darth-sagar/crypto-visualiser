import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'

const Header = () => {

    const {setcurrency} = useContext(CoinContext);

    const handleChange = (e) => {
        const value = e.target.value;
        if(value === "inr"){
            setcurrency({
                name: "INR",
                symbol: "₹"
            })
        }else if(value === "usd"){
            setcurrency({
                name: "USD",
                symbol: "$"
            })
        }else if(value === "eur"){
            setcurrency({
                name: "EUR",
                symbol: "€"
            })
        }
    }
    
  return (
    <div className='header flex items-center justify-between shadow-md '>

        <div className='logo flex items-center justify-center'>
            <img src={logo} alt="" className='w-11'/>
            <h3 className='name'>VizCrypto</h3>
        </div>
        <div className='header-links flex items-center justify-between'>
            <div className='links flex items-center justify-center'>
                <a href="/home">Home</a>
                <a href="/about">Features</a>
                <a href="/contact">Market</a>
                <a href="/about">Blog</a>
            </div>
            <div className="dropdown flex items-center ">
                <select name="" id="" onChange={handleChange} >
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