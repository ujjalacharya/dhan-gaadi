import React, {Component} from 'react';
import { BrowserRouter } from "react-router-dom"; 
import MainRouter from "./Router/MainRouter";
import "./App.css";


class App extends Component {
  componentDidMount() {
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
