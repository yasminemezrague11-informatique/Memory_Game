import React, { useState, useEffect } from "react";

export default function GameOver({ score, onRestart }) {
  const [pseudo, setPseudo] = useState("");
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState("");
  const [bestScores, setBestScores] = useState([]);

  const fetchScores = async () => {
    try {
      const res = await fetch("http://localhost:5000/scores");
      const data = await res.json();
      setBestScores(data);
    } catch (error) {
      console.error("Erreur GET /scores :", error);
      setBestScores([]);
    }
  };

  useEffect(() => {
    if (score > 0) fetchScores();
  }, [score]);

  const handleSave = async () => {
    if (!pseudo) return alert("Veuillez entrer un pseudo !");

    try {
      const res = await fetch("http://localhost:5000/scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pseudo, coups: score }),
      });

      if (!res.ok) throw new Error("Erreur serveur");
      const data = await res.json();

      if (data.success) {
        setSaved(true);
        setMessage(data.message || "Score sauvegardé ! 🎉");
        fetchScores();
      } else {
        setMessage(data.message || "Impossible de sauvegarder 😢");
      }
    } catch (error) {
      console.error("Erreur POST /scores :", error);
      setMessage("Impossible de sauvegarder le score 😢");
    }
  };

  return (
    <div className="gameover">
      <h2>Partie terminée !</h2>
      <p>Nombre de coups : {score}</p>

      {!saved ? (
        <>
          <input
            type="text"
            placeholder="Ton pseudo"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
          />
          <button onClick={handleSave}>Sauvegarder le score</button>
        </>
      ) : (
        <p>{message}</p>
      )}

      <button onClick={onRestart}>Nouvelle partie</button>

      <h3>Meilleurs scores :</h3>
      <div className="best-scores">
        <table>
          <thead>
            <tr>
              <th>Pseudo</th>
              <th>Coups</th>
            </tr>
          </thead>
          <tbody>
            {bestScores.map((s, i) => (
              <tr key={i}>
                <td>{s.pseudo}</td>
                <td>{s.coups}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
