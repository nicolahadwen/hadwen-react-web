import client from './client';

const login = async ({
  email,
  password
}) => {
  return client.post(
    '/login',
    {
      email,
      password
    });
};

export {
  login
}
