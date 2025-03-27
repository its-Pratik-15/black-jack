import React from 'react';

const Instructions = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="instructions-overlay">
      <div className="instructions-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>How to Play Blackjack</h2>
        
        <section>
          <h3>Objective</h3>
          <p>Beat the dealer by getting a hand value closer to 21 than the dealer without going over 21.</p>
        </section>

        <section>
          <h3>Card Values</h3>
          <ul>
            <li>Number cards (2-10): Face value</li>
            <li>Face cards (J, Q, K): 10 points</li>
            <li>Ace: 1 or 11 points (whichever benefits you more)</li>
          </ul>
        </section>

        <section>
          <h3>Game Flow</h3>
          <ol>
            <li>You and the dealer each receive two cards</li>
            <li>Choose to:
              <ul>
                <li><strong>Hit:</strong> Take another card</li>
                <li><strong>Stand:</strong> Keep your current hand</li>
              </ul>
            </li>
            <li>Dealer must hit on 16 and stand on 17</li>
          </ol>
        </section>

        <section>
          <h3>Winning Conditions</h3>
          <ul>
            <li>Get a Blackjack (Ace + 10-value card)</li>
            <li>Have a final hand higher than the dealer</li>
            <li>Dealer busts (goes over 21)</li>
          </ul>
        </section>

        <section>
          <h3>Losing Conditions</h3>
          <ul>
            <li>Your hand goes over 21 (bust)</li>
            <li>Dealer's hand is higher than yours</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Instructions;