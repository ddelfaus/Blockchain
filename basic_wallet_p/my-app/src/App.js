import React , {useState, useEffect} from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

import MainPage from "./comp/MainPage"

function App() {
  // const [coins, setCoins] = useState({

  // })

  // useEffect(() => {
  //     axios
  //         .get("http://localhost:5000/chain")
  //         .then(res => {
  //            console.log(res.data,"api")
  //             setCoins(res.data)
            
  //         })
  //         .catch(err => {
  //             console.log('error', err)
  //         })
  // }, [])

  // console.log(coins)



  return (
    <div className="App">
      <h1>Simple Wallet</h1>

      <MainPage />

    </div>
  );
}

export default App;
