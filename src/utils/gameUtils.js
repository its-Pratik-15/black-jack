const SUITS = ['♠', '♥', '♣', '♦'];
const VALUES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export const createDeck = () => {
  const deck = [];
  for (const suit of SUITS) {
    for (const value of VALUES) {
      deck.push({ suit, value });
    }
  }
  return deck;
};

export const shuffleDeck = (deck) => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const calculateHandValue = (hand) => {
  let value = 0;
  let aces = 0;

  for (const card of hand) {
    if (card.value === 'A') {
      aces += 1;
    } else if (['K', 'Q', 'J'].includes(card.value)) {
      value += 10;
    } else {
      value += parseInt(card.value);
    }
  }

  for (let i = 0; i < aces; i++) {
    if (value + 11 <= 21) {
      value += 11;
    } else {
      value += 1;
    }
  }

  return value;
};

export const isBlackjack = (hand) => {
  return hand.length === 2 && calculateHandValue(hand) === 21;
};

export const isBust = (hand) => {
  return calculateHandValue(hand) > 21;
};