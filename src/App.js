import React from 'react'
import './App.css';
import Counter from './containers/Counter/Counter';

function App() {

  return (
    <div className="App" data-test="component-App">
      <header className="header">
        <h1 data-test="App-header">React Testing Application</h1>
      </header>
      <main className="main">
        <Counter/>
      </main>
    </div>
  );
}

export default App;
