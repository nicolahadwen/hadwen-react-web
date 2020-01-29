import React from 'react';
import ReactBreakpoints from 'react-breakpoints';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { breakpoints } from './theme';
import Layout from './components/presentational/RootLayout';
import Routes from './components/core/Routes';
import { Provider } from 'react-redux'
import { store } from './redux';

const App = () => (
  <ReactBreakpoints breakpoints={breakpoints}>
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </Provider>
  </ReactBreakpoints>
);

export default App;
