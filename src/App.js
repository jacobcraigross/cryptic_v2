// import useState and useEffect
import React, {useState, useEffect} from 'react';
// import Axios 
import Axios from 'axios';
import './App.css';
import axios from 'axios';
import Coin from './Coin';



function App() {
  // common pattern 
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  // useEffect for the Axios / coingecko API / .then for the promise after 
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })
    .catch(error => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">search a currency</h1>
        <form>
          <input type="text" placeholder="search" className="coin-input" onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return(<Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol} 
          volume={coin.market_cap}
          price={coin.current_price}
          />)
      })}
    </div>
  );
}

export default App;

