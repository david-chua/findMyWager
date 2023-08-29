import './App.css';
import WagerForm from './Components/Form';
import React, { useState } from 'react';
import Instructions from './Components/Instructions';

function App() {

  const [wagerInfo, setWagerInfo ] = useState({
    supposedWinning: 0,
    odds: 100,
    newBet: 0,
    totalWinning: 0
})

  return (
    <div className="App">
      <Instructions/>
      <WagerForm 
        wagerInfo = {wagerInfo}
        setWagerInfo = {setWagerInfo}
      />
    </div>
  );
}

export default App;
