import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Components/pages/Home";
import MyBookings from "../Components/pages/MyBookings";
import BusAvailable from "../Components/pages/BusAvailable";
import BusUnavailable from "../Components/pages/BusUnavailable";

const MainRouter = () => (
 <Switch>
   <Route path="/" exact component={Home} />
   <Route path="/my-bookings" exact component={MyBookings} />
   <Route path="/bus-available" exact component={BusAvailable} />
   <Route path="/bus-unavailable" exact component={BusUnavailable} />
 </Switch>
);

export default MainRouter;