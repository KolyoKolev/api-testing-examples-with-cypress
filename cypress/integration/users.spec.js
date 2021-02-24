import ENDPOINTS from '../constants/endpoints';
import { NEW_USER } from '../constants';

Cypress.Commands.add('requestUsersEndpoint', () => {
  cy.request(ENDPOINTS.users);
});

Cypress.Commands.add('getUsersResponseBodyData', () => {
  cy.requestUsersEndpoint().its('body').its('data');
});

describe('Users API', () => {
  context('GET requests', () => {
    it('should assert the status code', () => {
      cy.requestUsersEndpoint().its('status').should('eq', 200);
    });

    it('should assert the number of users', () => {
      cy.getUsersResponseBodyData()
        .should('be.an', 'array')
        .and('have.length', 6);
    });
  });

  context('POST requests', () => {
    it('should create a new user', () => {
      cy.request('POST', ENDPOINTS.users, NEW_USER).then((res) => {
        expect(res.status).to.eq(201);
        expect(Object.keys(res.body)).to.have.length(5);
        expect(res.body.id).to.eq(NEW_USER.id);
        expect(res.body.email).to.eq(NEW_USER.email);
        expect(res.body.firstName).to.eq(NEW_USER.firstName);
        expect(res.body.lastName).to.eq(NEW_USER.lastName);
        expect(res.body.notExistingKeyPair).to.eq(undefined);
      });
    });
  });
});
