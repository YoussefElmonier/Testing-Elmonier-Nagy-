import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the homepage', () => {
  cy.visit('https://example.com');
});

Then('I see the welcome message', () => {
  cy.contains('Welcome');
});