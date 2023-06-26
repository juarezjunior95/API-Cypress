




describe('Teste de requisição com XMLHttpRequest', () => {
  it('Deve retornar o usuário com o ID 7', () => {
    // Envia a solicitação GET com cy.request()
    cy.api('GET', 'https://reqres.in/api/users/7')
      .then((response) => {
        // Verifica se a resposta possui o status 200 (OK)
        expect(response.status).to.eq(200)

        // Verifica se o corpo da resposta contém as informações do usuário esperadas
        expect(response.body.data.first_name).to.eq('Michael')

        })
      })
  })


  describe('Teste de requisição com XMLHttpRequest', () => {
    it('Deve retornar os usuários da página 2', () => {
      // Inicia a solicitação XMLHttpRequest
      cy.api({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=2',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }).then((response) => {
        // Verifica se a resposta possui o status 200 (OK)
        expect(response.status).to.eq(200)
  
        // Verifica se a resposta contém o corpo esperado
        expect(response.body).to.have.property('page', 2)
        expect(response.body).to.have.property('per_page', 6)
        expect(response.body).to.have.property('total', 12)
        expect(response.body.data).to.have.length(6)
      })
    })
  })
  
  describe('Teste de requisição POST com XMLHttpRequest', () => {
    it('Deve criar um novo usuário', () => {
      // Define o objeto de dados para enviar com a solicitação
      const data = {
        name: 'juares',
        job: 'leader'
      }
  
      // Envia a solicitação POST para a URL "https://reqres.in/api/users"
      cy.api({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        body: data,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        // Verifica se o status da resposta é 201 (Created)
        expect(response.status).to.eq(201)
  
        // Verifica se o corpo da resposta contém os dados esperados
        expect(response.body).to.have.property('name', 'juares')
        expect(response.body).to.have.property('job', 'leader')
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('createdAt')
      })
    })
  })
  

  describe('Teste de requisição POST com XMLHttpRequest', () => {
    it('Deve atualizar um usuário existente', () => {
      // Define o objeto de dados para enviar com a solicitação
      const data = {
        name: 'juares',
        job: 'zion resident'
      }
  
      // Envia a solicitação POST para a URL "https://reqres.in/api/users/2"
      cy.api({
        method: 'POST',
        url: 'https://reqres.in/api/users/2',
        body: data,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        // Verifica se o status da resposta é 201 (Created)
        expect(response.status).to.eq(201)
  
        // Verifica se o corpo da resposta contém os dados esperados
        expect(response.body).to.have.property('name', 'juares')
        expect(response.body).to.have.property('job', 'zion resident')
      })
    })
  })
  


  describe('Teste de Requisição PATCH', () => {
    it('Valida o Status Code 200 OK', () => {
      cy.api({
        method: 'PATCH',
        url: 'https://reqres.in/api/users/2',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          "name": "juares",
          "job": "zion resident"
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })
  


  describe('Teste de registro', () => {
    it('Realiza uma requisição POST para https://reqres.in/api/register', () => {
      cy.api({
        method: 'POST',
        url: 'https://reqres.in/api/register',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          "email": "eve.holt@reqres.in",
          "password": "pistol"
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body).to.deep.equal({
          "id": 4,
          "token": "QpwL5tke4Pnpja7X4"
        });
      });
    });
  });
  