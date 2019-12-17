import React, {Component} from 'react';
import { BrowserRouter } from "react-router-dom"; 
import MainRouter from "./Router/MainRouter";
import { isAuthenticated } from "./Utils/Requests/Auth";
import setAuthToken from "./Utils/setAuthToken";
import "./App.css";

setAuthToken(isAuthenticated().token);

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    );
  }
}

export default App;
