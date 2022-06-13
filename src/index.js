import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

// Creating Graphql Server
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql", //endpoint
  cache: new InMemoryCache(),
  // InMemoryCache -> for save firstly query hit api, and if we want adding new data with querying api will get in memory cache first
});

// https://rickandmortyapi.com/graphql

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* Connect Graphql Server to React App */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
