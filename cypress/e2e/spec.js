describe("App", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("works", () => {
    cy.findByText(/imprint/i)
      .click()
      .get("#Imprint")
      .should("exist")
  })
})
