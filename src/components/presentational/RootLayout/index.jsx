import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import VerticalBox from "../../common/box/VerticalBox";
import AppBar from "../../common/AppBar";

const Container = styled(VerticalBox)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const LayoutComponent = ({
  children
}) => (
  <Container>
    <AppBar />
    <VerticalBox>
      {children}
    </VerticalBox>
  </Container>
);

LayoutComponent.propTypes = {
  children: PropTypes.node
};

LayoutComponent.defaultProps = {
  children: null
};

export default LayoutComponent;
