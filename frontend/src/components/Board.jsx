import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";


const emojis = ["🐶","🐱","🐭","🐹","🦊","🐻","🐼","🐸","🦁","🐯"];

export default function Board({ onGameOver, restart, difficulty }) {
  const [cards, setCards] = useState([]);
  const [flippedIds, setFlippedIds] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);
  const [moves, setMoves] = useState(0);

  
  const initBoard = () => {
    if (!difficulty) return;

    const selectedEmojis = emojis.slice(0, difficulty / 2);
    const shuffled = [...selectedEmojis, ...selectedEmojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji }));

    setCards(shuffled);
    setFlippedIds([]);
    setMatchedIds([]);
    setMoves(0);
  };

  
  useEffect(() => {
    initBoard();
  }, [restart, difficulty]);

  
  const handleClick = (id) => {
    if (flippedIds.includes(id) || matchedIds.includes(id)) return;
    if (flippedIds.length === 2) return;

    const newFlipped = [...flippedIds, id];
    setFlippedIds(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(prev => prev + 1);
      const [firstId, secondId] = newFlipped;

      if (cards[firstId].emoji === cards[secondId].emoji) {
        setMatchedIds(prev => [...prev, firstId, secondId]);
        setFlippedIds([]);
      } else {
        setTimeout(() => setFlippedIds([]), 1000);
      }
    }
  };

  
  useEffect(() => {
    if (cards.length > 0 && matchedIds.length === cards.length) {
      onGameOver(moves);
    }
  }, [matchedIds, cards, moves, onGameOver]);

  return (
    <div className="board-container">
      <div className="top-info">
        <p className="moves-counter">Coups : {moves}</p>
      </div>

      <div className="board">
        {cards.map(card => (
          <Card
            key={card.id}
            emoji={card.emoji}
            isFlipped={flippedIds.includes(card.id) || matchedIds.includes(card.id)}
            onClick={() => handleClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
}
