import React from 'react';
import ReactBreakpoints from 'react-breakpoints';
import { breakpoints } from './theme';
import Layout from './components/container/Layout';

const App = () => (
  <ReactBreakpoints breakpoints={breakpoints}>
    <Layout>
      <div style={{ width: '100%', height: '100%', backgroundColor: 'pink' }} />
    </Layout>
  </ReactBreakpoints>
);

export default App;
