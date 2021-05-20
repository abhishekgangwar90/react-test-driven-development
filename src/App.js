import React from 'react'
import './App.css';
import WordGuess from './containers/WordGuess';
// import Counter from './containers/Counter/Counter';

function App() {

  return (
    <div className="App" data-test="component-App">
      <header className="App-header">
        <h1 data-test="App-header">React Testing Application</h1>
      </header>
      <main className="main">
        {/* <Counter/> */}
        <WordGuess/>
      </main>
    </div>
  );
}

export default App;
