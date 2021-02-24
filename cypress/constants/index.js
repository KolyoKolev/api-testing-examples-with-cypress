const RANDOM_ID = Cypress._.random(0, 100);
const id = RANDOM_ID;
const email = 'dummy_mail@dummy.dummy';
const password = 'dummy_password';
const firstName = 'Dummy';
const lastName = 'Name';

export const NEW_USER = {
  id,
  email,
  firstName,
  lastName,
};
