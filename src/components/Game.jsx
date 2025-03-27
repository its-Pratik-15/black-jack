import React, { useState, useEffect } from 'react';
import Card from './Card';
import Instructions from './Instructions';
import { createDeck, shuffleDeck, calculateHandValue, isBlackjack, isBust } from '../utils/gameUtils';

const Game = () => {
  const [deck, setDeck] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [gameState, setGameState] = useState('betting'); // betting, playing, dealer, ended
  const [showInstructions, setShowInstructions] = useState(false);
  const [message, setMessage] = useState('');
  const [chips, setChips] = useState(1000);
  const [currentBet, setCurrentBet] = useState(0);

  const initializeGame = () => {
    const newDeck = shuffleDeck(createDeck());
    setDeck(newDeck);
    setPlayerHand([]);
    setDealerHand([]);
    setGameState('betting');
    setMessage('Place your bet!');
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const placeBet = (amount) => {
    if (amount <= chips) {
      setChips(chips - amount);
      setCurrentBet(amount);
      dealInitialCards();
    }
  };

  const dealCard = () => {
    const newDeck = [...deck];
    const card = newDeck.pop();
    setDeck(newDeck);
    return card;
  };

  const dealInitialCards = () => {
    const player = [dealCard(), dealCard()];
    const dealer = [dealCard(), dealCard()];
    setPlayerHand(player);
    setDealerHand(dealer);
    setGameState('playing');

    if (isBlackjack(player)) {
      handleDealerTurn();
    }
  };

  const hit = () => {
    const newHand = [...playerHand, dealCard()];
    setPlayerHand(newHand);

    if (isBust(newHand)) {
      endGame('Player busts! Dealer wins!');
    } else if (calculateHandValue(newHand) === 21) {
      handleDealerTurn();
    }
  };

  const stand = () => {
    handleDealerTurn();
  };

  const handleDealerTurn = () => {
    setGameState('dealerTurn');
    let currentDealerHand = [...dealerHand];

    while (calculateHandValue(currentDealerHand) < 17) {
      currentDealerHand = [...currentDealerHand, dealCard()];
    }

    setDealerHand(currentDealerHand);
    determineWinner(currentDealerHand);
  };

  const determineWinner = (finalDealerHand) => {
    const playerValue = calculateHandValue(playerHand);
    const dealerValue = calculateHandValue(finalDealerHand);

    if (isBlackjack(playerHand) && !isBlackjack(finalDealerHand)) {
      setChips(chips + currentBet * 2.5);
      endGame('Blackjack! Player wins!');
    } else if (!isBlackjack(playerHand) && isBlackjack(finalDealerHand)) {
      endGame('Dealer has Blackjack! Dealer wins!');
    } else if (isBust(finalDealerHand)) {
      setChips(chips + currentBet * 2);
      endGame('Dealer busts! Player wins!');
    } else if (playerValue > dealerValue) {
      setChips(chips + currentBet * 2);
      endGame('Player wins!');
    } else if (dealerValue > playerValue) {
      endGame('Dealer wins!');
    } else {
      setChips(chips + currentBet);
      endGame('Push! It\'s a tie!');
    }
  };

  const endGame = (msg) => {
    setMessage(msg);
    setGameState('gameOver');
  };

  return (
    <div className="game-container">
      <div className="info-container">
        <h2>Chips: ${chips}</h2>
        <h3>{message}</h3>
        <button className="instructions-button" onClick={() => setShowInstructions(true)}>How to Play</button>
      </div>

      <Instructions isOpen={showInstructions} onClose={() => setShowInstructions(false)} />

      {gameState === 'betting' && (
        <div className="betting-container">
          <button onClick={() => placeBet(25)}>Bet $25</button>
          <button onClick={() => placeBet(50)}>Bet $50</button>
          <button onClick={() => placeBet(100)}>Bet $100</button>
        </div>
      )}

      <div className="dealer-hand">
        <h3>Dealer's Hand</h3>
        <div className="cards">
          {dealerHand.map((card, index) => (
            <Card
              key={index}
              suit={card.suit}
              value={card.value}
              hidden={index === 1 && gameState === 'playing'}
            />
          ))}
        </div>
      </div>

      <div className="player-hand">
        <h3>Player's Hand</h3>
        <div className="cards">
          {playerHand.map((card, index) => (
            <Card
              key={index}
              suit={card.suit}
              value={card.value}
              hidden={false}
            />
          ))}
        </div>
      </div>

      {gameState === 'playing' && (
        <div className="actions-container">
          <button onClick={hit}>Hit</button>
          <button onClick={stand}>Stand</button>
        </div>
      )}

      {gameState === 'gameOver' && (
        <button onClick={initializeGame}>Play Again</button>
      )}
    </div>
  );
};

export default Game;