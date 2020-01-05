import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VerticalPaddingComponent = styled.div`
  width: 100%;
  height: ${props => props.size}
`;

const VerticalPadding = ({
  size
}) => <VerticalPaddingComponent size={size} />;

VerticalPadding.propTypes = {
  size: PropTypes.string.isRequired
};

export default VerticalPadding;
