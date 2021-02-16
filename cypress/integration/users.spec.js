import ENDPOINTS from '../constants/endpoints';

Cypress.Commands.add('requestUsersEndpoint', () => {
  cy.request(ENDPOINTS.users);
});

describe('Users', () => {
  it('should assert the status code', () => {
    cy.requestUsersEndpoint().its('status').should('eq', 200);
  });
});
