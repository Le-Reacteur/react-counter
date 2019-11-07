import React, { useState } from "react";
import "./App.css";

// 1. Faire la mise en page (html / css)
// 2. Créer les états
// 3. Mettre en place les interactions (onClick, etc.)

function App() {
  // Définir une valeur par défaut
  // Créer la variable qui va représenter l'état
  // Créer la fonction qui va permettre de modifier l'état
  const [counter1, setCounter1] = useState(0);

  // HTML + JS = JSX
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <p>{counter1}</p>
      <div>
        <button
          onClick={() => {
            setCounter1(counter1 - 1);
            // Ne jamais modifier directement une variable d'état :
            // counter1 = counter1 - 1;
            // counter1++;
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCounter1(counter1 + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
