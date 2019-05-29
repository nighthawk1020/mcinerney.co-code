import { getGreeting } from '../support/app.po';

describe('website-code-react', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to website-code-react!');
  });
});
