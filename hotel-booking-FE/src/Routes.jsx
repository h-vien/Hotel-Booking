import React from "react";
import { Route, Switch } from "react-router-dom";
import { path } from "./constant/path";
import AdminGuard from "./core/guards/AdminGuard";
import AuthenticatedGuard from "./core/guards/AuthenticatedGuard";
import UnAuth from "./core/guards/UnAuth";
import NotFound from "./core/layout/NotFound";
import Admin from "./Pages/Admin";
import Booking from "./Pages/Booking";
import CreateRoom from "./Pages/Hotel/CreateRoom";
import HomePage from "./Pages/HomePage";
import HotelDetail from "./Pages/HotelDetail";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import RegisterMember from "./Pages/RegisterMember";
import SearchPage from "./Pages/SearchPage";
import ChangePass from "./Pages/User/ChangePass";
import Profile from "./Pages/User/Profile";
import Purchase from "./Pages/User/Purchase";
import HotelManagerGuard from "./core/guards/HotelManagerGuard";
import Overview from "./Pages/Hotel/Overview";
import BookingManagement from "./Pages/Hotel/BookingManagement";
import Dashboard from "./core/layout/Dashboard";

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
        <AuthenticatedGuard>
          <RegisterMember />
        </AuthenticatedGuard>
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
      <Route path={path.user} exact>
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
        <HotelManagerGuard>
          <Purchase />
        </HotelManagerGuard>
      </Route>
      <Route path={path.createRoom}>
        <HotelManagerGuard>
          <CreateRoom />
        </HotelManagerGuard>
      </Route>

      <Route path={path.bookingManagement}>
        <HotelManagerGuard>
          <BookingManagement />
        </HotelManagerGuard>
      </Route>
      <Route path={path.overview}>
        <HotelManagerGuard>
          <Overview />
        </HotelManagerGuard>
      </Route>
      <Route path={path.dashboard}>
        <HotelManagerGuard>
          <Dashboard />
        </HotelManagerGuard>
      </Route>
      <Route path={path.notFound}>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
