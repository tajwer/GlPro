import React from 'react'
// import ReactDOM from 'react-dom'

import './App.css';
// import Home from './Components/Home';
import HomeContainer from './Containers/HomeContainer'
import User from './User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Home /> */}
       <HomeContainer />
       <User data={{name:'Tajwer Jalal' , qualification:'Master'}} />
      </header>

      
    </div>
  
  );
}

export default App;
