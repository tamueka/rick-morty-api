import React from "react";
import { Route, Routes } from "react-router-dom";
import CharacterDetail from "../components/CharacterDetail";
import CharacterList from "../components/CharacterList";

const RouterComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CharacterList />} />
      <Route path="/character/:id" element={<CharacterDetail />} />
    </Routes>
  );
};

export default RouterComponent;