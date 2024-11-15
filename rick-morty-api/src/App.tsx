import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CharacterList from "../src/application/components/CharacterList";
import { CharacterProvider } from "../src/application/context/CharacterProvider";
import CharacterDetail from "./application/components/CharacterDetail";

export const App: React.FC = () => {
  return (
    <CharacterProvider>
      <Router>
        <div>
          <h1 style={{ textAlign: "center" }}>Personajes Rock and Morty</h1>
          <Routes>
            {/* Ruta principal para la lista de personajes */}
            <Route path="/" element={<CharacterList />} />
            {/* Ruta dinámica para los detalles de un personaje específico */}
            { <Route path="/character/:id" element={<CharacterDetail />} /> }
          </Routes>
        </div>
      </Router>
    </CharacterProvider>
  );
};
