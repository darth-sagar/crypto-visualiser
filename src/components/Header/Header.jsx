import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'
import {Link} from 'react-router-dom';

const Header = () => {

    const { setcurrency } = useContext(CoinContext);

    const handleChange = (e) => {
        const value = e.target.value;
        switch (value){
            case "usd":
                setcurrency({
                    name:"USD",
                    symbol:"$",
                })
                break;
            case "inr":
                setcurrency({
                    name:"INR",
                    symbol:"₹",
                })
                break;
            case "eur":
                setcurrency({
                    name:"EUR",
                    symbol:"€",
                })
                break;
            default:
                setcurrency({
                    name:"INR",
                    symbol:"₹",
                })
        }
    }
    
  return (
    <div className='header flex items-center justify-between shadow-md '>

        <div className='logo flex items-center justify-center'>
            <Link to={'/'}>
                <img src={logo} alt="" className='w-10'/>
            </Link>
            <h4 className='name'>VizCrypto</h4>
        </div>
        <div className='header-links flex items-center justify-between'>
            <div className='links flex items-center justify-center'>
                <Link to={'/'} >Home</Link>
                <Link to="/about">Features</Link>
                <Link to="/contact">Market</Link>
                <Link to="/about">Blog</Link>
            </div>
            <div className="dropdown flex items-center ">
                <select name="" id="" onChange={handleChange} >
                    <option value="usd">USD</option>
                    <option value="inr">INR</option>
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