const RANDOM_ID = Cypress._.random(0, 100);

export const NEW_USER = {
  id: RANDOM_ID,
  email: 'dummy_mail@dummy.dummy',
  first_name: 'Dummy',
  last_name: 'Name',
};
