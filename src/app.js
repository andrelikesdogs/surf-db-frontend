import { Container, Toolbar, Typography } from "@mui/material";
import React from "react";

import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Stats from "./pages/Stats";
import MapOverview from "./pages/MapOverview";
import MapDetails from "./pages/MapDetails";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { Box } from "@mui/system";

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <Box sx={{ paddingTop: 5, px: 5 }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/stats/:steamId" component={Stats} />
            <Route path="/maps" component={MapOverview} />
            <Route path="/maps/:name" component={MapDetails} />
          </Switch>
        </Box>
      </Router>
    </ApolloProvider>
  );
};

export default App;
