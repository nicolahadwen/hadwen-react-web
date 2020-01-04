import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: inherit;
  justify-content: ${props => props.center ? 'center' : 'flex-start'}
`;
const HorizontalLayoutComponent = ({
  children,
  className,
  center
}) => (
  <Container className={className} center={center}>
    {children}
  </Container>
);

HorizontalLayoutComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  center: PropTypes.bool
};

HorizontalLayoutComponent.defaultProps = {
  children: null,
  className: null,
  center: false
};

export default HorizontalLayoutComponent;
