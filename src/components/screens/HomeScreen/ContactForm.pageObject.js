export default class ContactFormPageObject {
  constructor(cy) {
    this.cy = cy;
    this.cy.visit('/');
  }

  openModal(byMenu = true) {
    if (byMenu) {
      this.cy.get('header a[title="Contato"]').click();
    } else {
      this.cy.get('section[class*="ContactWrapper"] button').click();
    }

    return this;
  }

  fillForm({ name, email, message }) {
    this.cy.get('#formContact input[name="name"]').type(name);
    this.cy.get('#formContact input[name="email"]').type(email);
    this.cy.get('#formContact textarea').type(message);

    return this;
  }

  submitForm() {
    this.cy.get('#formContact button[type="submit"]').click();

    return this;
  }
}
