const { Alchemy, Network } = require('alchemy-sdk');

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  
const alchemy = new Alchemy(settings);

async function test(){
    const block = await alchemy.core.getBlockNumber()
    console.log(block);
}

test();