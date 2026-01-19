import React, { useState } from "react";
import Board from "./components/Board.jsx";
import GameOver from "./components/GameOver.jsx";

export default function App() {
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [restart, setRestart] = useState(false);
  const [difficulty, setDifficulty] = useState(null); 
  const [gameStarted, setGameStarted] = useState(false);

  const handleGameOver = (finalScore) => {
    setScore(finalScore);
    setGameOver(true);
  };

  const handleRestart = () => {
    setRestart(!restart);
    setGameOver(false);
    setScore(0);
    setGameStarted(false);
    setDifficulty(null);
  };

  const startGame = () => {
    if (!difficulty) {
      alert("Veuillez choisir un niveau de difficulté !");
      return;
    }
    setGameStarted(true);
  };

  return (
    <div className="app">
      <h1>Memory Game</h1>

      {!gameStarted && !gameOver && (
        <div className="difficulty-selection">
          <h2>Choisissez la difficulté :</h2>
          <div className="difficulty-buttons">
            <button onClick={() => setDifficulty(12)}>12 cartes</button>
            <button onClick={() => setDifficulty(16)}>16 cartes</button>
            <button onClick={() => setDifficulty(20)}>20 cartes</button>
          </div>

          {difficulty && (
            <div className="start-button">
              <p>Vous avez choisi : {difficulty} cartes</p>
              <button onClick={startGame}>Commencer la partie</button>
            </div>
          )}
        </div>
      )}

      {gameStarted && !gameOver && (
        <Board
          onGameOver={handleGameOver}
          restart={restart}
          difficulty={difficulty}
        />
      )}

      {gameOver && <GameOver score={score} onRestart={handleRestart} />}
    </div>
  );
}
