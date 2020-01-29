import client from './client';

const createUser = async ({
  email,
  firstName,
  lastName
}) => {
  console.log("API")
  console.log('firstName: ', firstName);
  console.log('lastName: ', lastName);
  console.log('email: ', email);
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
