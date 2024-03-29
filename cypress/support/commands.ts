/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    getMessageFromGmail(subject: string, receiver: string): Chainable<Subject>;
    getResetLinkFromGmail(subject: string, receiver: string): Chainable<HTMLElement>;
    login(email: string, password: string): Chainable<Subject>;
    searchAndClickOnSiteInTable(domain: string): Chainable<Subject>;
  }
}

Cypress.Commands.add('getMessageFromGmail', (subject: string, receiver: string) => {
  cy.task('gmail:get-messages', {
    options: {
      from: false,
      to: receiver,
      subject: subject,
    },
  }).then(emails => {
    assert.isAtLeast(emails.length, 1, `"${subject}" was not received`);
  });
});

Cypress.Commands.add('getResetLinkFromGmail', (subject: string, receiver: string) => {
  cy.task('gmail:get-messages', {
    options: {
      from: false,
      to: receiver,
      subject: subject,
      include_body: true,
    },
  }).then(emails => {
    assert.isAtLeast(emails.length, 1, `"${subject}" was not received`);

    let links = emails[0].body.html.match(
      /https?:\/\/[A-Za-z0-9\.\-]+\/ls\/click\?upn=[A-Za-z0-9\?\&\=;\+!'\(\)\*\-\._~%]*/gm,
    );

    const resetLink = links[1];

    cy.visit(resetLink, {failOnStatusCode: false});
  });
});

Cypress.Commands.add('login', (email, password) => {
  cy.get('html').should('have.attr', 'data-uw-w-loader');
  cy.url().should('include', '/login');

  cy.get('.auth-layout__content .auth app-login h1.title').should('contain.text', 'Log Into UserWay');

  cy.get('app-login .auth__content form').should('exist');

  cy.get('app-login .auth__content form').find('input[id="email"]').type(email);
  cy.get('app-login .auth__content form').find('input[id="password"]').type(password);

  cy.intercept({
    method: 'POST',
    url: /api\/sso\/v0\/public\/service-user\/login/,
  }).as('login');

  cy.get('app-login .auth__content form').contains('.default-form__submit button', 'Login').click();

  cy.wait('@login').its('response.statusCode').should('eq', 200);
  cy.saveLocalStorage();

  cy.url().should('include', '/widget');
  cy.get('html').should('have.attr', 'data-uw-w-loader');
});

Cypress.Commands.add('searchAndClickOnSiteInTable', domain => {
  cy.intercept({
    method: 'GET',
    url: /api\/v1\/sites\/search/,
  }).as('search');
  cy.get('mc-sites-table mc-search-input input.mat-input-element').type(domain);
  cy.wait('@search').its('response.statusCode').should('eq', 200);

  cy.intercept({
    method: 'GET',
    url: /api\/a11y-data\/.*\/accessibility-score/,
  }).as('accessibility-score');
  cy.contains('table.my-sites__tab-table td.cdk-column-sitesUrl button', domain).click();
  cy.wait('@accessibility-score');

  cy.get('mc-drawer .drawer-root').should('exist');
  cy.get('mc-drawer .site-view-title span').should('have.text', domain);
});
