import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given(`que acessei a url padrão`, () => {
    cy.visit('https://erp-homologacao.viasoft.com.br/pt/login');
});

Given(`preenchi o CPF`, () => {
    cy.get('.login-form')
    .find('input[placeholder="Informe seu CPF"]')
    .should('be.visible')
    .focus()
    .type('06445988911');
});

Given(`preenchi a Senha`, () => {
    cy.get('.login-form')
    .find('input[placeholder="Informe sua senha"]')
    .should('be.visible')
    .focus()
    .type('homepage');
});

When(`clico no botão Entrar`, () => {
    cy.get('.login-form')
    .submit();
});

When(`verifico a pagina inicial`, () => {
    cy.get('#main')
});

Then(`o login foi realizado com sucesso`, () => {
    cy.get('div:first-child').contains('O')
});
