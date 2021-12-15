import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { apolloClient } from "./core/apollo";
import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
