
import { createContext, useEffect } from 'react';
import { useState } from 'react';

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
    const [allCoins, setAllCoins] = useState([]);
    const [currency, setcurrency] = useState({
        name: "USD",
        symbol: "$"
    });

    const fetchCoins = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Y9fMdaakqpj6roLKtKEojVTh'}
          };
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoins(res))
            .catch(err => console.error(err));
    }

    useEffect(() => {fetchCoins()},[currency])

    const coinData = {
        allCoins,
        currency,
        setcurrency,
    };

    return (
        <CoinContext.Provider value={coinData}>
            {props.children}
        </CoinContext.Provider>
  );
}
export default CoinContextProvider;