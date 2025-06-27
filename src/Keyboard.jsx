import React from "react";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

function Keyboard({ onGuess, guessedLetters }) {
  return (
    <div className="keyboard">
      {ALPHABET.map(letter => (
        <button
          key={letter}
          onClick={() => onGuess(letter)}
          disabled={guessedLetters.includes(letter)}
          className="key"
        >
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
