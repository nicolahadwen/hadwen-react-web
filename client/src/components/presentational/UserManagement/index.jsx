import React, {useState} from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField/index';
import Typography from '@material-ui/core/Typography/index';
import styled from 'styled-components';

import {colours} from '../../../theme';
import VerticalBox from '../../common/box/VerticalBox';
import HorizontalBox from '../../common/box/HorizontalBox';

import { createUser as createUserAction} from '../../../redux/user/action';
import VerticalPadding from '../../common/padding/VerticalPadding';

const Container = styled(VerticalBox)`
  width: 100%;
  background-color: ${colours.layout.background}
`;

const LoginComponent = ({
  createUser,
  isCreatingUser,
  createdUserId
}) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onClick = () => createUser({
    email,
    firstName,
    lastName
  });

  return (
    <Container>
      <HorizontalBox center={true}>
        <VerticalBox>
          <Typography variant="h1">
            User Management
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
            value={firstName}
            label="First Name"
            onChange={(event) => setFirstName(event.target.value)}/>
          <VerticalPadding size={'20px'} />
          <TextField
            required
            value={lastName}
            label="Last Name"
            onChange={(event) => setLastName(event.target.value)}/>
          <VerticalPadding size={'20px'} />
          <Typography variant="h6">
            {isCreatingUser ? 'Is Creating User' : 'Not Creating User'}
          </Typography>
          <Typography variant="h6">
            {createdUserId ? createdUserId : 'No User Id'}
          </Typography>
          <button onClick={onClick}>click to change state</button>
        </VerticalBox>
      </HorizontalBox>
    </Container>
  );
};

const mapStateToProps = state => {
  const {user: { isCreatingUser, createdUserId }} = state;
  return {
    isCreatingUser,
    createdUserId
  }
};

const mapDispatchToProps = {
  createUser: createUserAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
