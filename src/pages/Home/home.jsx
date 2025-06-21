import React, { useEffect } from 'react'
import './Home.css'
import { useContext } from 'react'
import { CoinContext } from '../../context/CoinContext'
import { useState } from 'react'

const Home = () => {

  const {allCoins,currency} = useContext(CoinContext);
  const [displayCoins, setDisplayCoins] = useState([]);
  const [input, setInput] = useState("");

  const inputhandler=(event)=>{
    const value = event.target.value;
    console.log(value);
    setInput(value);
  }

  const searchhandler= async (event)=>{
    event.preventDefault();
    const coins = await allCoins.filter((item)=>{
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoins(coins);
  }

  useEffect(() => {
    setDisplayCoins(allCoins);},
      [allCoins]
  )

  return (

    <div>
      <div className="hero-page">
        <div className="hero-text flex flex-col items-center justify-center">
          <h1 className='text-5xl font-bold'>Welcome to VizCrypto</h1>
          <p className='text-xl'>Your one-stop solution for all crypto needs</p>
          <p className='text-xl'>Get the latest news, prices, and trends in the crypto world</p>
          <form action="submit" method="POST" onSubmit={searchhandler} className='search-form flex items-center justify-center'   >
            <input type="text" placeholder='Search for a coin...' className='search-input' onChange={inputhandler} value={input}/>
            <button  className='search_button'>&#128269;</button>
          </form>
        </div>
        <div className="values">
        <div className=" upperbar border-b-2 border-gray-300 w-full">
            <p style={{padding:"0px 10px",paddingLeft:"15px"}}>Rank</p>
            <p style={{padding:"0px"}}>Coins</p>
            <p >Price</p>
            <p >24H Changes</p>
            <p style={{padding:"0px 10px"}} >Market Capture</p>
          </div>
          {
            displayCoins.slice(0,10).map((item, index)=> (
              <div className="table_values pt-3 pb-3" key={index}>
                <p style={{padding:"0px 24px"}}>{item.market_cap_rank}</p>
                <div className="coin flex items-center justify-start">
                  <img src={item.image} alt="" className='w-10 h-10' />
                  <p>{item.name}</p>
                </div>
                <p>{currency.symbol}{item.current_price.toLocaleString()}</p>
                <p style={{color:item.price_change_percentage_24h<0?"#FB4141":"#5CB338"}}>{Math.floor(item.price_change_percentage_24h*100)/100}%</p>
                <p style={{paddingRight:"20px"}}>{currency.symbol}{item.market_cap.toLocaleString()}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
