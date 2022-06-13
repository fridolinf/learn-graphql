import React from "react";
import { Link, useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";

const CharacterDetail = () => {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (error) return <div>Error Getting Data</div>;
  if (loading) return <div>Load...</div>;

  return (
    <>
      <Link to="/">
        <h4 style={{ fontSize: "2rem", textAlign: "center" }}>Back To Home</h4>
      </Link>
      <div
        key={data.character.id}
        style={{ display: "flex", marginLeft: "25%" }}
      >
        <div>
          <img src={data.character.image} alt={data.character.name} />
          <h1>{data.character.name}</h1>
        </div>
        <div style={{ marginLeft: "5%" }}>
          {data.character.episode.map((eps) => (
            <div key={eps.name}>
              <p>
                {eps.name} - <b>{eps.episode}</b>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CharacterDetail;
