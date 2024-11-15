import React from "react";
import Character from "../components/Character";
import { Character as CharacterType } from "../../types/types";
import { Link } from "react-router-dom";
import { CharactersContext } from "../context/CharacterProvider";

const CharacterList: React.FC = () => {
  const { characters } = CharactersContext();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        marginTop: "30px",
      }}
    >
      {characters.map((character: CharacterType) => (
        <Link to={`/character/${character.id}`} key={character.id}>
          <Character key={character.id} character={character} />
        </Link>
      ))}
    </div>
  );
};

export default CharacterList;
