import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CharacterProvider } from "../src/application/context/CharacterProvider";
import RouterComponent from "../src/application/routes/router";

export const App: React.FC = () => {
  return (
    <CharacterProvider>
      <Router>
        <h1 style={{ textAlign: "center" }}>Personajes Rock and Morty</h1>
        {/* Enrutado */}
        <RouterComponent />
      </Router>
    </CharacterProvider>
  );
};
