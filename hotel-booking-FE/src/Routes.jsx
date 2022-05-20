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
import Profile from "./Pages/User/Profile";
import Register from "./Pages/Register";
import RegisterMember from "./Pages/RegisterMember";
import RoomDetail from "./Pages/Booking";
import SearchPage from "./Pages/SearchPage";
import Booking from "./Pages/Booking";
import { path } from "./constant/path";
import ChangePass from "./Pages/User/ChangePass";
import Purchase from "./Pages/User/Purchase";

const Routes = () => {
  return (
    <Switch>
      <Route path={path.home} exact>
        <HomePage />
      </Route>
      <Route path={path.searchHotel}>
        <SearchPage />
      </Route>
      <Route path={path.hotelDetail}>
        <HotelDetail />
      </Route>
      <Route path={path.bookingDetail}>
        <Booking />
      </Route>
      <Route path={path.login}>
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
      <Route path={path.registerMember}>
        <RegisterMember />
      </Route>
      <Route path={path.createRoom}>
        <CreateRoom />
      </Route>
      <Route path="/admin">
        <AdminGuard>
          <Admin />
        </AdminGuard>
      </Route>

      <Route path={path.register}>
        <UnAuth>
          <Register />
        </UnAuth>
      </Route>
      <Route path={path.user}>
        <AuthenticatedGuard>
          <Profile />
        </AuthenticatedGuard>
      </Route>
      <Route path={path.changePass}>
        <AuthenticatedGuard>
          <ChangePass />
        </AuthenticatedGuard>
      </Route>
      <Route path={path.purchase}>
        <AuthenticatedGuard>
          <Purchase />
        </AuthenticatedGuard>
      </Route>
      <Route path={path.notFound}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
