import React, { useState } from "react";
import WordDisplay from "./WordDisplay";
import Keyboard from "./Keyboard";
import Lives from "./Lives";
import GameOverModal from "./GameOverModal";
import "./App.css";

const LANGUAGES = ["Python", "HTML", "CSS", "JavaScript", "C++", "Java", "PHP", "Ruby"];
const WORDS = ["react", "component", "state", "props", "redux", "hook", "virtual"];

function App() {
  const [word, setWord] = useState(() => WORDS[Math.floor(Math.random() * WORDS.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters(prev => [...prev, letter]);

    if (!word.includes(letter)) {
      setWrongGuesses(prev => prev + 1);
    }
  };

  const isGameOver = wrongGuesses >= LANGUAGES.length;
  const isGameWon = word.split("").every(letter => guessedLetters.includes(letter));

  const resetGame = () => {
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
    setGuessedLetters([]);
    setWrongGuesses(0);
  };

  return (
    <div className="app">
      <h1>🧠 Code Hangman</h1>
      <Lives languages={LANGUAGES} wrongGuesses={wrongGuesses} />
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <Keyboard onGuess={handleGuess} guessedLetters={guessedLetters} />
      {(isGameOver || isGameWon) && (
        <GameOverModal
          won={isGameWon}
          answer={word}
          onRestart={resetGame}
        />
      )}
    </div>
  );
}

export default App;
