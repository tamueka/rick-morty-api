import React from "react";
import { Character as CharacterType } from "../../types/types";

interface CharacterProps {
  character: CharacterType;
}

const Character: React.FC<CharacterProps> = ({
  character,
}) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
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

export default Character;
