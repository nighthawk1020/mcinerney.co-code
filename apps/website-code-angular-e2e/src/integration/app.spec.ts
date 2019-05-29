import { getGreeting } from '../support/app.po';

describe('website-code-angular', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to website-code-angular!');
  });
});
