import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

interface Animal {
  name: "string";
}

const AnimalList = () => {
  const { loading, data, error } = useQuery(gql`
    {
      animals {
        name
      }
    }
  `);
  if (error) {
    return <div>error...</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {data.animals.map((a: Animal) => (
        <p key={a.name}>{a.name}</p>
      ))}
    </div>
  );
};

export default AnimalList;
