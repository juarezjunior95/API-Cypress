describe('Pesquisa no Google', () => {
    it('Pesquisa por "camaçari"', () => {
      // Abre o Google
      cy.visit('https://www.google.com/')
  
      // Encontra o campo de pesquisa pelo xpath
      cy.xpath('//textarea[contains(@class,"gLFyf")]')
        .type('camaçari')
  
      // Clica no botão de pesquisa
      //cy.get('input[name="btnK"]').click()
    })
  })
  