import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HorizontalPaddingComponent = styled.div`
  width: ${props => props.size}
  height: 100%;
`;

const HorizontalPadding = ({
  size
}) => <HorizontalPaddingComponent size={size} />;

HorizontalPadding.propTypes = {
  size: PropTypes.string.isRequired
};

export default HorizontalPadding;
