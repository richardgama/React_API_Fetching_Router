import React from "react";
import './App.css';
import { Link } from 'react-router-dom';

const Header = () => (

    <>
            <header className="site-header">
            <h1 className="page-title">My app</h1>
            <h3 className="page-description">Some useful information</h3>
            </header>

            <hr className="separator"></hr>

            <div className="navigationBar">
                <Link to="/" className="navigationButton" style={{textDecoration: 'none'}}>HOME</Link>
                <Link to="/crypto" className="navigationButton" style={{textDecoration: 'none'}}>CRYPTOS</Link>
                <Link to="/weather" className="navigationButton" style={{textDecoration: 'none'}}>WEATHER</Link>
            </div>

            <hr className="separator"></hr>
</>

)

export default Header;