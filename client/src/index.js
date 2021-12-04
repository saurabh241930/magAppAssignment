import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import LogRocket from 'logrocket';
// import setupLogRocketReact from 'logrocket-react';


const rootElement = document.getElementById("root");

// setupLogRocketReact(LogRocket);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CssBaseline />
      <Provider store={store}><App />
      </Provider>
    </Router>
  </React.StrictMode>,
  rootElement
);
