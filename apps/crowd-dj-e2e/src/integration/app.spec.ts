import { getGreeting } from '../support/app.po';

describe('crowd-dj', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to crowd-dj!');
  });
});
