import React from "react";
import { CharactersContext } from "../context/CharacterProvider";
import { useParams } from "react-router-dom";

const CharacterDetail: React.FC = () => {
  const { characters } = CharactersContext();
  const { id } = useParams();
  const characterId = Number(id);
  const character = characters.find(({ id }) => id === characterId);

  if (!character) {
    return <p>Personaje no encontrado</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <h3>{character.name}</h3>
      <img
        src={character.image}
        alt={character.name}
        style={{ width: "100px" }}
      />
    </div>
  );
};

export default CharacterDetail;
