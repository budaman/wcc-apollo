import React, { useEffect, useState } from "react";
import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";
import { Animal } from "../graphql/types";

const GET_ANIMALS_QUERY = loader("../graphql/queries/animal-list.graphql");

const AnimalList = () => {
  const { loading, data, error } = useQuery(GET_ANIMALS_QUERY);

  if (loading) {
    return <h2>Loading....</h2>;
  }

  if (error) {
    return <h2>Opppps.... Something went wrong</h2>;
  }

  return (
    <div>
      {data.animals.map((animal: Animal) => (
        <div key={animal.id}>
          <p>{animal.name}</p>
          <img
            className="img"
            src={
              animal.imageUrl ||
              "https://i.insider.com/5ebbfc9ffc593d729d60df73?width=1136&format=jpeg"
            }
          />
        </div>
      ))}
    </div>
  );
};

export default AnimalList;
