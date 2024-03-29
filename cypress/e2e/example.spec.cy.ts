import '@userway/app-cypress';

beforeEach(() => {
  cy.visit('/');
  cy.get('html').should('have.attr', 'lang');
});

// Check http://localhost:4200/
describe('DemoSuite', () => {
  it(['@smoke'], 'SimplesTestCase - 1', () => {
    cy.url().should('include', '/');

    // get URL
    cy.userwayAnalysis({
      strict: false,
      saveReport: 'json',
      screenshots: true,
    });

    // click

    // get URL
    cy.userwayAnalysis({
      strict: false,
      saveReport: 'json',
      screenshots: true,
    });
  });

  it(['@smoke'], 'SimplesTestCase - 2', () => {
    cy.url().should('include', '/');
    cy.userwayAnalysis({
      strict: false,
      saveReport: 'json',
      screenshots: true,
    });
  });
});
