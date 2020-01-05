import React, {useState} from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import {colours} from '../../../theme';
import VerticalBox from '../../common/box/VerticalBox';
import HorizontalBox from '../../common/box/HorizontalBox';

import {login as loginAction} from '../../../redux/auth/action';
import VerticalPadding from '../../common/padding/VerticalPadding';

const Container = styled(VerticalBox)`
  width: 100%;
  background-color: ${colours.layout.background}
`;

const LoginComponent = ({
  login,
  isLoggingIn,
  isLoggedIn
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClick = () => login({
    email,
    password
  });
  return (
    <Container>
      <HorizontalBox center={true}>
        <VerticalBox>
          <Typography variant="h1">
            Login
          </Typography>
          <TextField
            required
            autoFocus
            value={email}
            label="Email"
            onChange={(event) => setEmail(event.target.value)}/>
          <VerticalPadding size={'20px'} />
          <TextField
            required
            value={password}
            label="Password"
            type="password"
            onChange={(event) => setPassword(event.target.value)}/>
          <VerticalPadding size={'20px'} />
          <Typography variant="h6">
            {isLoggingIn ? 'isLoggingIn' : 'not logging in'}
          </Typography>
          <Typography variant="h6">
            {isLoggedIn ? 'isLoggedIn' : 'not logged in'}
          </Typography>
          <button onClick={onClick}>click to change state</button>
        </VerticalBox>
      </HorizontalBox>
    </Container>
  );
};

const mapStateToProps = state => {
  const {auth: {isLoggingIn, isLoggedIn}} = state;
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
)(LoginComponent);
