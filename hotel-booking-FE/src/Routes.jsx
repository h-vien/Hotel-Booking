import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HotelDetail from "./Pages/HotelDetail";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/hotel/:id">
        <HotelDetail />
      </Route>
    </Switch>
  );
};

export default Routes;
