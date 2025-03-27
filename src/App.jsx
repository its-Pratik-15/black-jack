import React from 'react';
import Game from './components/Game';
import './App.css';
import blackjackLogo from './assets/blackjack-logo.svg';

function App() {
  return (
    <div className="app">
      <header className="game-header">
        <img src={blackjackLogo} alt="Blackjack Logo" className="game-logo" />
      </header>
      <Game />
    </div>
  );
}

export default App
