import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import AppBar from '../common/AppBar';

const LayoutComponent = ({
  children
}) => (
  <Grid
    container
    direction="column"
    justify="flex-start"
  >
    <AppBar/>
    {children}
  </Grid>
);

LayoutComponent.propTypes = {
  children: PropTypes.node
};

LayoutComponent.defaultProps = {
  children: null
};

export default LayoutComponent;
