import { loader } from "graphql.macro";
import { gql, useQuery } from "@apollo/client";
import { Animal } from "../graphql/types";

const GET_ANIMALS_QUERY = loader("../graphql/queries/animal-list.graphql");

const AnimalList = () => {
  const { loading, data, error } = useQuery(GET_ANIMALS_QUERY);
  if (error) {
    return <div>error...</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {data.animals.map((a: Animal) => (
        <div key={a.id}>
          <img src={a.imageUrl || ""} /> {a.name}
        </div>
      ))}
    </div>
  );
};

export default AnimalList;
