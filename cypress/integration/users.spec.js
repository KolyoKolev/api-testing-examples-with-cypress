import ENDPOINTS from '../constants/endpoints';

Cypress.Commands.add('requestUsersEndpoint', () => {
  cy.request(ENDPOINTS.users);
});

Cypress.Commands.add('getUsersResponseBodyData', () => {
  cy.requestUsersEndpoint().its('body').its('data');
});

describe('Users', () => {
  it('should assert the status code', () => {
    cy.requestUsersEndpoint().its('status').should('eq', 200);
  });
});
