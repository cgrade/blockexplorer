
const ListStats = ({gas, block, mcap}) => {
      //LiveStats State
//   const [gas, setGas] = useState(null);
//   const [block, setBlock] = useState(null);

//   setGas(gas);
//   setBlock(block)
  return ( 
    <>
        <div className="stats">
            <div className="stats-items">Gas: {gas} gwei</div>
            <div className="stats-items">Market Cap: {mcap}</div>
            <div className="stats-items">Latest Block: {block}</div>
        </div>
    </>
 );
}




export default ListStats;