import client from './client';

const createUser = async ({
  email,
  firstName,
  lastName
}) => {
  return client.post(
    '/user', {
      email,
      firstName,
      lastName
    });
};

export {
  createUser
}
