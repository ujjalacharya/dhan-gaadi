import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Components/pages/Home";

const MainRouter = () => (
 <Switch>
   <Route path="/" exact component={Home} />
 </Switch>
);

export default MainRouter;