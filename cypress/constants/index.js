const RANDOM_ID = Cypress._.random(0, 100);
const id = RANDOM_ID;
const email = 'dummy_mail@dummy.dummy';
const password = 'dummy_password';
const firstName = 'Dummy';
const lastName = 'Name';
// required for passing the registration POST request
const DEFINED_USER_EMAIL = 'eve.holt@reqres.in';

export const EXISTING_USER = {
  id: 1,
  email: 'george.bluth@reqres.in',
  first_name: 'George',
  last_name: 'Bluth',
  avatar: 'https://reqres.in/img/faces/1-image.jpg',
};

export const NEW_USER = {
  id,
  email,
  firstName,
  lastName,
};

export const REGISTER = {
  USER_WITH_EMAIL_AND_PASSWORD: {
    email: DEFINED_USER_EMAIL,
    password,
  },

  USER_WITH_MISSING_EMAIL: {
    password,
  },

  USER_WITH_MISSING_PASSWORD: {
    email: DEFINED_USER_EMAIL,
  },
};

export const ERROR_MESSAGES = {
  MISSING_EMAIL_OR_USERNAME: 'Missing email or username',
  MISSING_PASSWORD: 'Missing password',
};
