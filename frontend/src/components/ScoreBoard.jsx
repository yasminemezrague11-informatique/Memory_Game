import React, { useEffect, useState } from "react";

export default function ScoreBoard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/scores")
      .then(res => res.json())
      .then(data => setScores(data));
  }, []);

  return (
    <div className="scoreboard">
      <h2>Meilleurs scores</h2>
      <ol>
        {scores.map((s, i) => (
          <li key={i}>{s.pseudo} : {s.coups}</li>
        ))}
      </ol>
    </div>
  );
}
