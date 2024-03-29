// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-localstorage-commands';
import 'cypress-real-events';
import 'cypress-mochawesome-reporter/register';
require('cypress-downloadfile/lib/downloadFileCommand');

const dayjs = require('dayjs');
Cypress.dayjs = dayjs;

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // if (err.message.includes('window.lintrk')) {
  return false;
  // }
});

Cypress.on('window:before:load', win => {
  cy.spy(win.console, 'error');
  cy.spy(win.console, 'warn');
  localStorage.setItem('isCypress', 'true');
});

afterEach(() => {
  cy.saveLocalStorage('UserWayManageAppToken');
  cy.saveLocalStorage('UserWayManageAppJwtRefreshToken');
});

beforeEach('Restore LocalStorage', () => {
  cy.restoreLocalStorage();
});
