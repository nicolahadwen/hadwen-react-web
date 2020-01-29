import React from 'react';
import styled from 'styled-components';
import VerticalBox from '../../common/box/VerticalBox';
import Typography from '@material-ui/core/Typography/index';

import { colours } from '../../../theme';
import HorizontalBox from '../../common/box/HorizontalBox';

const Container = styled(VerticalBox)`
  width: 100%;
  background-color: ${colours.layout.background}
`;

export default ({
}) => (
  <Container>
    <HorizontalBox center={true}>
      <Typography variant="h1">
        Account Settings
      </Typography>
    </HorizontalBox>
  </Container>
);
