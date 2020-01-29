import React from 'react';
import PropTypes from "prop-types";
import HorizontalLayout from "./HorizontalBox";
import VerticalLayout from "./VerticalBox";
import styled from 'styled-components';

const Container = styled(VerticalLayout)`
  width: 100%;
`;

const CenterBoxComponent = ({
  className,
  children
}) => {
  return (
    <Container center={true} className={className}>
      <HorizontalLayout center={true}>
        {children}
      </HorizontalLayout>
    </Container>
  )
};

CenterBoxComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CenterBoxComponent.defaultProps = {
  children: null,
  className: null,
  center: false
};

export default CenterBoxComponent;
