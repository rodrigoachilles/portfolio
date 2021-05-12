/* eslint-disable jest/expect-expect */
/// <reference types="cypress" />

import ContactFormPageObject from '../../../src/components/screens/HomeScreen/ContactForm.pageObject';

describe('/pages/index', () => {
  describe('FormContact', () => {
    describe('abrindo modal', () => {
      it('quando clicar no header Contato', () => {
        const contactForm = new ContactFormPageObject(cy);

        cy.get('div[class*="ModalWrapper"] :first').should('have.attr', 'style')
          .should('contain', 'transform: translateY(100%) translateZ(0px)');

        contactForm.openModal();

        cy.get('div[class*="ModalWrapper"] :first').should('have.attr', 'style')
          .should('contain', 'transform: translateY(0%) translateZ(0px)');
      });

      it('quando clicar no button Contato', () => {
        const contactForm = new ContactFormPageObject(cy);

        cy.get('div[class*="ModalWrapper"] :first').should('have.attr', 'style')
          .should('contain', 'transform: translateY(100%) translateZ(0px)');

        contactForm.openModal(false);

        cy.get('div[class*="ModalWrapper"] :first').should('have.attr', 'style')
          .should('contain', 'transform: translateY(0%) translateZ(0px)');
      });
    });

    describe('quando preencher os campos do form de contato', () => {
      it('e der sucesso', () => {
        const contactForm = new ContactFormPageObject(cy);

        cy.intercept('https://contact-form-api-jamstack.herokuapp.com/message')
          .as('submitForm');

        contactForm
          .openModal()
          .fillForm({
            name: 'Rodrigo',
            email: 'rodrigo.achilles@gmail.com',
            message: 'Teste do cypress',
          })
          .submitForm();

        return cy.wait('@submitForm')
          .then(() => {
            cy.get('p[id="successMessage"]').should('exist');
          });
      });
      it.skip('e der erro', () => {
        const contactForm = new ContactFormPageObject(cy);

        cy.intercept('https://contact-form-api-jamstack.herokuapp.com/message')
          .as('submitForm');

        contactForm.openModal();

        contactForm.fillForm({
          name: '',
          email: 'rodrigo.achilles@gmail.com',
          message: 'Teste do cypress',
        }).submitForm();

        cy.wait('@submitForm')
          .then(() => {
            cy.get('p[id="failMessage"]').should('exist');
          });
      });
    });
  });
});
