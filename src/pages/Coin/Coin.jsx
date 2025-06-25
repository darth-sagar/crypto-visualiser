import React, {useContext, useEffect, useState} from 'react'
import './Coin.css'
import {useParams} from 'react-router-dom'
import {CoinContext} from '../../context/CoinContext.jsx';

const Coin = () => {
  const {coinId} = useParams();
  const [coindata , setcoindata] = useState();
  const {currency}=useContext(CoinContext);

  const fetchCoin = async () => {
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
        .then(res => res.json())
        .then(res => setcoindata(res))
        .catch(err => console.error(err));
  }

  useEffect(()=>{
    fetchCoin();
  }, [currency])

  if(coindata){
    return (
        <div>
          <div>
            <img src={coindata.image.large} alt={"Coin_image"} className={'w-[20px]'}/>
            <p>{coindata.name} - ({coindata.symbol.toUpperCase()})</p>
          </div>
        </div>
    )
  }
  else{
    <div>
      No coins to be found
    </div>
  }

}

export default Coin