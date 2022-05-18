import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import AdminGuard from "./core/guards/AdminGuard";
import AuthenticatedGuard from "./core/guards/AuthenticatedGuard";
import UnAuth from "./core/guards/UnAuth";
import NotFound from "./core/layout/NotFound";
import Admin from "./Pages/Admin";
import CreateRoom from "./Pages/CreateRoom";
import HomePage from "./Pages/HomePage";
import HotelDetail from "./Pages/HotelDetail";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import RegisterMember from "./Pages/RegisterMember";
import RoomDetail from "./Pages/Booking";
import SearchPage from "./Pages/SearchPage";
import Booking from "./Pages/Booking";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/hotel/search">
        <SearchPage />
      </Route>
      <Route path="/hotel/:id">
        <HotelDetail />
      </Route>
      <Route path="/booking/:id">
        <Booking />
      </Route>
      <Route path="/login">
        <UnAuth>
          <Login heading="Chào mừng trở lại" role={1} />
        </UnAuth>
      </Route>
      <Route path="/admin/login">
        <UnAuth>
          <Login heading="Hello admin" role={2} />
        </UnAuth>
      </Route>
      <Route path="/admin">
        <AdminGuard>
          <Admin />
        </AdminGuard>
      </Route>
      <Route path="/register-member">
        <RegisterMember />
      </Route>
      <Route path="/create-room">
        <CreateRoom />
      </Route>
      <Route path="/admin">
        <AdminGuard>
          <Admin />
        </AdminGuard>
      </Route>

      <Route path="/register">
        <UnAuth>
          <Register />
        </UnAuth>
      </Route>
      <Route path="/profile">
        <AuthenticatedGuard>
          <Profile />
        </AuthenticatedGuard>
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
