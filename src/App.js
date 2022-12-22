import './App.css';
import Header from './header';
import Home from './home';
import Crypto from './crypto';
import Weather from './weather';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <>  
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      
    </>
  );
}

export default App;
