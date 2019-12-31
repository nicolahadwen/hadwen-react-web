import client from './client';

const login = async () => {
  return client.post(
    '/login',
    {
      "email": "nicolahadwen@gmail.com",
      "password": "test1234!"
    });
};

export {
  login
}
