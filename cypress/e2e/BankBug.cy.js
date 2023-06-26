describe('Testando o Qazando E-Commerce', function () {
    beforeEach(function () {
 
       cy.visit('https://bugbank.netlify.app/')

    })

    it('Verifica o título da página e o texto principal', () => {

  
      // Verifica se o texto principal está presente na página
      cy.get('h1').should('have.text', 'O banco com bugs e falhas do seu jeito')

      
    })
    it.only('preencher campos de usuario e senha', ()=>{
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('teste@teste.com')

        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('password')
    })
  })
  