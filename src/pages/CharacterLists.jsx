import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";

const CharacterLists = () => {
  const { error, loading, data } = useCharacters();

  if (loading) return <div> Spinner ... </div>;

  if (error) return <div> Error Data </div>;

  return (
    <div>
      {data.characters.results.map((character) => {
        return (
          <div
            key={character.id}
            style={{ display: "flex", margin: "10%", padding: "1%" }}
          >
            <Link to={`/${character.id}`}>
              <img
                src={character.image}
                alt={character.name}
                width="100%"
                height="100%"
              />
            </Link>
            <h1 style={{ margin: "10%" }}>{character.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterLists;
