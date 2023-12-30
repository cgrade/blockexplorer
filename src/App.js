import { Alchemy, Network } from 'alchemy-sdk';

import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import LiveStats from './components/LiveStats';
import { useState } from 'react';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {

//LiveStats
  const [gas, setGas] = useState();
  const [block, setBlock] = useState();

  async function props(){
    setBlock(await alchemy.core.getBlockNumber().valueOf());
    setGas((await alchemy.core.getGasPrice()).toString());
  }
  props();

  return (
  <>
    <Header />
    <NavBar />
    <LiveStats gas={gas} block={block} mcap="$125Billion"/>
    <div className="latest">
      
    </div>
  </>
  )
}

export default App;
