describe('lojinha Api rest', function() {
  //before(function(){
    //cy.visit("http://165.227.93.41/lojinha")

    let token
  })

  it('Criar novo usuario', function() {
    cy.api({
      method: 'POST',
      url: 'http://165.227.93.41/lojinha/v2/usuarios',
      body: {
        "usuarioNome": "Teste Cypress new",
        "usuarioLogin": "Testando plugin_api new",
        "usuarioSenha": "123123"
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('message', 'Usuário adicionado com sucesso')
    })
  })

    it('Deve realizar o login', function() {
      cy.api({
        method: 'POST',
        url: 'http://165.227.93.41/lojinha/v2/login',
        body: {
          "usuarioLogin": "Teste Delete",
          "usuarioSenha": "123123"
        },
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('message', 'Sucesso ao realizar o login')
        expect(response.body.data).to.have.property('token');
        let token
        token = response.body.data.token;
      })
    })
  
 

      it.only('Deve criar um novo produto', () => {
        cy.api({
          method: 'POST',
          url: 'http://165.227.93.41/lojinha/v2/produtos',
          body: {
            "produtoNome": "Iphone 10",
            "produtoValor": 5050.6,
            "produtoCores": [
              "Gol"
            ],
            "produtoUrlMock": "",
            "componentes": [
              {
                "componenteNome": "Carregador",
                "componenteQuantidade": 2
              }
            ]
          },
          headers: {
            'Content-Type': 'application/json',
            'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c3VhcmlvaWQiOiIxNTg1NCIsInVzdWFyaW9sb2dpbiI6InNleHRhMTIzIiwidXN1YXJpb25vbWUiOiJUZXN0QXBpIn0.I7elJjAu7QBEwSXKDGC5jG96iD2Qf4i2mbUwRjTsIT8'
          }
        })
        .then((response) => {
          expect(response.status).to.eq(201)
          expect(response.body.message).to.eq('Produto adicionado com sucesso')
          expect(response.body.data).to.have.property('produtoId')
          cy.wrap(response.body.data.id).as('produtoId') // guarda o id do produto em uma variável para ser utilizada em outros testes
        })
      })
    
    