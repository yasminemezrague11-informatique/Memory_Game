import React from "react";

export default function Card({ emoji, isFlipped, onClick, extraClass }) {
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""} ${extraClass}`}
      onClick={onClick}
    >
      
      <div className="front">
        {isFlipped ? emoji : ""}
      </div>

      
      <div className="back">❓</div>
    </div>
  );
}
