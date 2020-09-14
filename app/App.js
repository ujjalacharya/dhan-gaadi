import React from "react";
import {StatusBar} from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import promiseMiddleware from "redux-promise";

import Main from "./src";

import reducers from "./src/store/reducers";
import ConstantColors from "./src/constants/ConstantColors";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware}>
        <StatusBar backgroundColor={ConstantColors.tintColor} />
        <Main />
      </Provider>
    );
  }
}

export default App;
