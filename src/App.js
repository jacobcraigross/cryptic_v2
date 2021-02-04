// import useState and useEffect
import React, {useState, useEffect} from 'react';
// import Axios 
import Axios from 'axios';
import './App.css';
import axios from 'axios';



function App() {
  // common pattern 
  const [coins, setCoins] = useState([]);

  // useEffect for the Axios / coingecko API / .then for the promise after 
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })
    .catch(error => console.log(error));
  }, []);


  // about to start creating the JSX video ends at 13:11 !!!!!!!
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">search a currency</h1>
        <form>
          <input type="text" placeholder="search" className="coin-input"/>
        </form>
      </div>
      
    </div>
  );
}

export default App;

