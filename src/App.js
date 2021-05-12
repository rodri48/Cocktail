import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import CocktailDetails from "./components/CocktailDetails";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/CocktailDetails/:id" component={CocktailDetails} />
      </Switch>
    </Router>
  );
}

export default App;
