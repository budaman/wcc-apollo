import React, { useEffect, useState } from "react";

interface Animal {
  name: "string";
}

const AnimalList = () => {
  const [animals, setAnimals] = useState<Animal[] | []>([]);

  useEffect(() => {
    fetch("https://petbook-back-dev.herokuapp.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "{ animals { name } }" }),
    })
      .then((res) => res.json())
      .then((res) => setAnimals(res.data.animals));
  }, []);

  return (
    <div>
      {animals.map((a: Animal) => (
        <p key={a.name}>{a.name}</p>
      ))}
    </div>
  );
};

export default AnimalList;
