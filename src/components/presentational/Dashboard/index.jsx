import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import VerticalBox from '../../common/box/VerticalBox';
import Typography from '@material-ui/core/Typography';

import { colours } from '../../../theme';
import HorizontalBox from '../../common/box/HorizontalBox';
import { login as loginAction  } from '../../../redux/auth/action';

const Container = styled(VerticalBox)`
  width: 100%;
  background-color: ${colours.layout.background}
`;

const DashboardComponent = ({
}) => {
  return (
    <Container>
      <HorizontalBox center={true}>
        <VerticalBox>
          <Typography variant="h1">
            Dashboard
          </Typography>
        </VerticalBox>
      </HorizontalBox>
    </Container>
  );
};

const mapStateToProps = state => {
  const { auth: { isLoggingIn, isLoggedIn} } = state;
  return {
    isLoggingIn,
    isLoggedIn
  }
};

const mapDispatchToProps = {
  login: loginAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardComponent);
