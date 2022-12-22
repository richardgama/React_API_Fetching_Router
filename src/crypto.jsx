import React from "react";
import './App.css';
import { useState,useEffect } from 'react';
import Header from './header';
import Feed from './feed';
import Currency from './currency';

const Crypto = () => {

    const [coinfeed,setCoinfeed] = useState([]);
    const [currency,setCurrency] = useState('eur');

    const urlCrypto = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=1&sparkline=false`

    const excludedCoins = ['usdt','busd','usdc','xrp'];

    const ApiCall = async () => {
        const response = await fetch(urlCrypto);
        const data = await response.json();
        // console.log(data);
        setCoinfeed(data);
      }

      useEffect(
        () => {ApiCall();}
        ,[currency])
    
    return(
        <>
            <Currency action={setCurrency}/>
            <div className="content">
                    {coinfeed.map((coinInfo)=>{if (excludedCoins.includes(coinInfo.symbol) === false) 
                        {return <Feed coin={coinInfo} currency={currency} key={coinInfo.id}/>}})}
            </div>
        </>
    )
}

export default Crypto;