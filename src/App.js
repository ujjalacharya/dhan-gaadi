import React, {Component} from 'react';
import { BrowserRouter } from "react-router-dom"; 
import MainRouter from "./Router/MainRouter";
import { isAuthenticated } from "./Utils/Requests/Auth";
import setAuthToken from "./Utils/setAuthToken";
import "./App.css";


class App extends Component {
  componentDidMount() {
    setAuthToken(isAuthenticated().token);
  }

  render() {
    return (
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    );
  }
}

export default App;
