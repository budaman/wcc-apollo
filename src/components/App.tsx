import React from "react";
import AnimalList from "./AnimalList";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://petbook-back-dev.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AnimalList />
      </div>
    </ApolloProvider>
  );
}

export default App;
