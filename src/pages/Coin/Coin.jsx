import React, {useContext, useEffect, useState} from 'react'
import './Coin.css'
import {useParams} from 'react-router-dom'
import {CoinContext} from '../../context/CoinContext.jsx';
import LineChart from '../../components/LineChart/LineChart.jsx';

const Coin = () => {
  const {coinId} = useParams();
  const [coindata , setcoindata] = useState();
  const [chartData, setChartData] = useState();
  const {currency}=useContext(CoinContext);

  const fetchCoin = async () => {
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
        .then(res => res.json())
        .then(res => setcoindata(res))
        .catch(err => console.error(err));
  }

  const fetchChartData = async () => {
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=20&interval=daily`, options)
        .then(res => res.json())
        .then(res => setChartData(res))
        .catch(err => console.error(err));
  }
  useEffect(()=>{
    fetchCoin();
    fetchChartData();
  }, [currency])

  if(coindata && chartData){
    return (
        <div className={'coin_page'} >
          <div className={'flex flex-col items-center justify-center'}>
            <img src={coindata.image.large} alt={"Coin_image"} className={'w-[160px] mt-10.5'}/>
            <p className={'mt-8.5 mb-8.5 text-3xl font-bold'}> {coindata.name} - ({coindata.symbol.toUpperCase()})</p>
            <ul>Crypto Market Rank - {coindata.market_cap_rank}</ul>
            <ul>Current Price - {currency.symbol} {coindata.market_data.current_price[currency.name.toLowerCase()].toLocaleString()}</ul>
            <ul>24 Hour High - {currency.symbol} {coindata.market_data.high_24h[currency.name.toLowerCase()].toLocaleString()}</ul>
            <ul >24 Hour Low - {currency.symbol} {coindata.market_data.low_24h[currency.name.toLowerCase()].toLocaleString()}</ul>
            <ul>Current Market Cap - {currency.symbol} {coindata.market_data.market_cap[currency.name.toLowerCase()].toLocaleString()}</ul>
            <ul className={"mb-8.5"}>Totol Volume - {currency.symbol} {coindata.market_data.total_volume[currency.name.toLowerCase()].toLocaleString()}</ul>
            <div className={"chart"}>
              <LineChart chartData={chartData}/>
            </div>
            <div className={'mb-10'}></div>
          </div>
        </div>
    )
  }
  else{
    return (
        <div className={'coin_page'}>
          <div className={'loader'}>
            <div className={'spin'}></div>
          </div>
        </div>
    )
  }

}

export default Coin