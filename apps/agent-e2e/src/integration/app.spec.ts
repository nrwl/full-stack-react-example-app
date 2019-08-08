import { getGreeting } from '../support/app.po';

describe('agent', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to agent!');
  });
});
