import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import promiseMiddleware from "redux-promise";

import Main from "./src";

import reducers from "./src/store/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStoreWithMiddleware = createStore(
  reducers,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);

class App extends React.Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware}>
        <Main />
      </Provider>
    );
  }
}

export default App;
