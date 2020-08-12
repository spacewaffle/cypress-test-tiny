/// <reference types="cypress" />
describe('page', () => {
  beforeEach(function () {
    cy.visit('/index.html', {
      onBeforeLoad(window) {
        cy.stub(window, "open").as("windowOpen")
        cy.stub(window.location, "reload").as("locationReload")
        // cy.stub(window, "location.reload").as('locationReload')
      }
    })
  })

  it('stubs window.open', () => {
    cy.get("#openButton").click();
  })

  it("doesn't reload the page", () => {
    cy.get("#reloadButton").click()
  })
})
