import { getGreeting } from '../support/app.po';

describe('tickets', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to tickets!');
  });
});
