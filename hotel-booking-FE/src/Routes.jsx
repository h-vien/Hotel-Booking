import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HotelDetail from "./Pages/HotelDetail";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RoomDetail from "./Pages/RoomDetail";
import SearchPage from "./Pages/SearchPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/search">
        <SearchPage />
      </Route>
      <Route path="/hotel/:id">
        <HotelDetail />
      </Route>
      <Route path="/rooms/:id">
        <RoomDetail />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};

export default Routes;
