import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import SuperAdminRoute from "./SuperAdminRoute";
import Home from "../Components/pages/Home";
import Signin from "../Components/pages/Signin";
import MyBookings from "../Components/pages/Bookings";
import AllBookings from "../Components/pages/Bookings/all";
import AddNewBus from "../Components/pages/AddNewBus";
import EditBus from "../Components/pages/AddNewBus/EditBus";
import EditProfile from "../Components/pages/Profile/edit";
import BusAvailable from "../Components/pages/BusAvailable";
import AllBusAvailable from "../Components/pages/BusAvailable/all";
import BusUnavailable from "../Components/pages/BusUnavailable";
import AllBusUnavailable from "../Components/pages/BusUnavailable/all";
import Owners from "../Components/pages/People/Owners";
import AddOwner from "../Components/pages/People/addOwner";
import Users from "../Components/pages/People/Users";
import Guests from "../Components/pages/People/Guests";
import Seats from "../Components/pages/Seats";
import Locations from "../Components/pages/Locations";
import EditLocation from "../Components/pages/Locations/edit";
import AddLocation from "../Components/pages/Locations/add";
import Travels from "../Components/pages/Travels";
import EditTravel from "../Components/pages/Travels/edit";
import AddTravel from "../Components/pages/Travels/add";

const MainRouter = () => (
  <Switch>
    <Route path="/signin" exact component={Signin} />
    <PrivateRoute path="/" exact component={Home} />
    <PrivateRoute path="/my-bookings" exact component={MyBookings} />
    <PrivateRoute path="/add-bus" exact component={AddNewBus} />
    <PrivateRoute path="/edit-bus/:slug" exact component={EditBus} />
    <PrivateRoute path="/bus-available" exact component={BusAvailable} />
    <PrivateRoute path="/bus-unavailable" exact component={BusUnavailable} />
    <PrivateRoute path="/seats-details/:slug" exact component={Seats} />
    <PrivateRoute
      path="/profile/edit"
      exact
      component={EditProfile}
    />
    <SuperAdminRoute path="/all-bookings" exact component={AllBookings} />
    <SuperAdminRoute
      path="/all-bus-available"
      exact
      component={AllBusAvailable}
    />
    <SuperAdminRoute
      path="/all-bus-unavailable"
      exact
      component={AllBusUnavailable}
    />
    <SuperAdminRoute path="/people-owners" exact component={Owners} />
    <SuperAdminRoute path="/people-users" exact component={Users} />
    <SuperAdminRoute path="/people-guests" exact component={Guests} />
    <SuperAdminRoute path="/locations" exact component={Locations} />
    <SuperAdminRoute path="/add-location" exact component={AddLocation} />
    <SuperAdminRoute path="/add-owner" exact component={AddOwner} />
    <SuperAdminRoute path="/edit-location/:slug" exact component={EditLocation} />
    <SuperAdminRoute path="/travels" exact component={Travels} />
    <SuperAdminRoute path="/add-travel" exact component={AddTravel} />
    <SuperAdminRoute path="/edit-travel/:slug" exact component={EditTravel} />
  </Switch>
);

export default MainRouter;
