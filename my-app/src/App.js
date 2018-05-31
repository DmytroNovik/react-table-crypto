import React, { Component } from 'react';
import './App.css';
import data from '../src/components/data/coins.json';
import CoinTable from '../src/components/coin-table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">"A wise person should have money in their head, but not in their heart." (Jonathan Swift)</h1>
        </header>
        <CoinTable data = {data} />
      </div>
    );
  }
}

export default App;
