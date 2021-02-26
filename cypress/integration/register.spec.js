import ENDPOINTS from '../constants/endpoints';
import { NEW_USER, REGISTER, ERROR_MESSAGES } from '../constants';

describe('Register API', () => {
  context('POST requests', () => {
    it('should create a new user', () => {
      cy.request('POST', ENDPOINTS.users, NEW_USER).then((res) => {
        expect(res.status).to.eq(201);
        expect(Object.keys(res.body)).to.have.length(5);
        expect(res.body.id).to.eq(NEW_USER.id);
        expect(res.body.email).to.eq(NEW_USER.email);
        expect(res.body.firstName).to.eq(NEW_USER.firstName);
        expect(res.body.lastName).to.eq(NEW_USER.lastName);
        expect(res.body.notExistingKeyPair).to.be.undefined;
      });
    });

    it('should create a new user successfully', () => {
      cy.request(
        'POST',
        ENDPOINTS.register,
        REGISTER.USER_WITH_EMAIL_AND_PASSWORD
      ).then((res) => {
        expect(res.status).to.eq(200);
        expect(res.body.id).to.eq(4);
        expect(res.body.token).to.eq('QpwL5tke4Pnpja7X4');
        expect(res.body.email).to.be.undefined;
        expect(res.body.password).to.be.undefined;
      });
    });

    it('should not be able to create user with missing email', () => {
      cy.request({
        method: 'POST',
        url: ENDPOINTS.register,
        body: REGISTER.USER_WITH_MISSING_EMAIL,
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.eq(400);
        expect(res.body).to.have.property(
          'error',
          ERROR_MESSAGES.MISSING_EMAIL_OR_USERNAME
        );
      });
    });

    it('should not be able to create user with missing password', () => {
      cy.request({
        method: 'POST',
        url: ENDPOINTS.register,
        body: REGISTER.USER_WITH_MISSING_PASSWORD,
        failOnStatusCode: false,
      }).then((res) => {
        expect(res.status).to.eq(400);
        expect(res.body).to.have.property(
          'error',
          ERROR_MESSAGES.MISSING_PASSWORD
        );
      });
    });
  });
});
