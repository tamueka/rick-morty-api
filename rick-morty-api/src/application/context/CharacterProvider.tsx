import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Character } from "../../types/types";

interface CharacterContextProps {
  characters: Character[];
}

const CharacterContext = createContext<CharacterContextProps | undefined>(
  undefined
);

interface CharacterProviderProps {
  children: ReactNode;
}

export const CharacterProvider: React.FC<CharacterProviderProps> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    const fetchDataCharacter = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        setCharacters(jsonData.results);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchDataCharacter();
  }, []);

  return (
    <CharacterContext.Provider
      value={{
        characters,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const CharactersContext = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error("CharacterContext must be used within a CharacterProvider");
  }
  return context;
};
