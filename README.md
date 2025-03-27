# Blackjack Game

A modern, interactive Blackjack game built with React and Vite. Experience the classic casino card game with a sleek user interface and smooth gameplay.

## Features

- Interactive gameplay with intuitive controls
- Real-time card animations and visual feedback
- Comprehensive game instructions
- Responsive design for all screen sizes
- Clean and modern user interface

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd blackjack
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and visit the local server URL shown in the terminal

## How to Play

### Objective
Beat the dealer by getting a hand value closer to 21 than the dealer without going over 21.

### Card Values
- Number cards (2-10): Face value
- Face cards (J, Q, K): 10 points
- Ace: 1 or 11 points (whichever benefits you more)

### Game Flow
1. You and the dealer each receive two cards
2. Choose to:
   - **Hit**: Take another card
   - **Stand**: Keep your current hand
3. Dealer must hit on 16 and stand on 17

### Winning Conditions
- Get a Blackjack (Ace + 10-value card)
- Have a final hand higher than the dealer
- Dealer busts (goes over 21)

### Losing Conditions
- Your hand goes over 21 (bust)
- Dealer's hand is higher than yours

## Technologies Used

- React.js
- Vite
- CSS3
- JavaScript (ES6+)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
