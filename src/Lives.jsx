import React from "react";

function Lives({ languages, wrongGuesses }) {
  const remaining = languages.slice(wrongGuesses);

  return (
    <div className="lives">
      <p>💻 Lives Left:</p>
      <ul>
        {remaining.map((lang, index) => (
          <li key={index} className="life">{lang}</li>
        ))}
      </ul>
    </div>
  );
}

export default Lives;
