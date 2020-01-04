import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: inherit;
  justify-content: ${props => props.center ? 'center' : 'flex-start'}
`;
const VerticalLayoutComponent = ({
  children,
  className,
  center
}) => (
  <Container className={className} center={center}>
    {children}
  </Container>
);

VerticalLayoutComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  center: PropTypes.bool
};

VerticalLayoutComponent.defaultProps = {
  children: null,
  className: null,
  center: false
};

export default VerticalLayoutComponent;
