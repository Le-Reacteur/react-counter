import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

// 1. Faire la mise en page (html / css)
// 2. Créer les états
// 3. Mettre en place les interactions (onClick, etc.)

function App() {
  // Définir une valeur par défaut
  // Créer la variable qui va représenter l'état
  // Créer la fonction qui va permettre de modifier l'état
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

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
      <Counter
        value={counter1}
        onIncrement={() => {
          setCounter1(counter1 + 1);
        }}
        onDecrement={() => {
          setCounter1(counter1 - 1);
        }}
      />
      <Counter
        value={counter2}
        onIncrement={() => {
          setCounter2(counter2 + 1);
        }}
        onDecrement={() => {
          setCounter2(counter2 - 1);
        }}
      />
      <Counter
        value={counter3}
        onIncrement={() => {
          setCounter3(counter3 + 1);
        }}
        onDecrement={() => {
          setCounter3(counter3 - 1);
        }}
      />

      <p>Total : {counter1 + counter2 + counter3}</p>
    </div>
  );
}

export default App;
