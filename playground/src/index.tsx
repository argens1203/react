import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {configureStore} from "redux-starter-kit";
import rootReducer from "./redux/rootReducer";
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Provider store={configureStore({reducer: rootReducer})}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
