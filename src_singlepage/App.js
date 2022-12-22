import './App.css';
import { useState,useEffect } from 'react';
import Feed from './feed';
import Currency from './currency';
import Weather from './weather';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  const [coinfeed,setCoinfeed] = useState([]);
  const [currency,setCurrency] = useState('eur');
  const [weather,useWeather] = useState([]);

  const urlCrypto = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=1&sparkline=false`
  const urlWeather = "https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,shortwave_radiation_sum&timezone=Europe%2FBerlin"

  const excludedCoins = ['usdt','busd','usdc','xrp'];

  const ApiCall = async () => {
    const response = await fetch(urlCrypto);
    const data = await response.json();
    // console.log(data);
    setCoinfeed(data);
  }

  const ApiCallWeather = async () => {
      const response = await fetch(urlWeather);
      const data = await response.json();
      console.log(data);
      useWeather(data);
    }

  useEffect(
    () => {ApiCall();}
    ,[currency])

  useEffect(
    () => {ApiCallWeather();}
    ,[])

  return (
    
    <>

      <Routes>
        <Route path="/weather" element={<weather />} />
      </Routes>

      <header className="site-header">
        <h1 className="site-title">My feeds</h1>
        <h3 className="site-description">Some useful price feeds</h3>
        <Currency action={setCurrency}/>
      </header>

      <hr className="separator"></hr>

      <div className="navigationBar">
        <label className="navigationButton">CRYPTOS</label>
        <label className="navigationButton">STOCKS</label>
        <label className="navigationButton">WEATHER</label>
      </div>

      <hr className="separator"></hr>

      <div className="content">
        {coinfeed.map((coinInfo)=>{if (excludedCoins.includes(coinInfo.symbol) === false) 
              {return <Feed coin={coinInfo} currency={currency} key={coinInfo.id}/>}})}
      </div>
    </>
  );
}

export default App;
