import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./global.scss"

import {Provider} from "react-redux";
import Store from "./redux/storage";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
