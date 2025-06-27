import React from "react";

function GameOverModal({ won, answer, onRestart }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{won ? "🎉 You Won!" : "💀 Game Over"}</h2>
        {!won && <p>The correct word was: <strong>{answer}</strong></p>}
        <button onClick={onRestart} className="restart-button">Play Again</button>
      </div>
    </div>
  );
}

export default GameOverModal;
