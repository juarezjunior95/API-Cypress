describe('Armazenar Token', () => {
    let token;
  
    it('Obter Token', () => {
      cy.api({
        method: 'POST',
        url: 'https://health-passaport-homolog.azurewebsites.net/connect/token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: true,
        body: {
          client_id: 'psp_spa',
          client_secret: 'k%s5y&#~kXjf5dC*',
          scopes: 'patient_care_api,essential_health_api',
          grant_type: 'client_credentials'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('access_token');
        token = response.body.access_token;
      });
    });
  
    // Outros testes que utilizam o token armazenado podem ser escritos aqui
  });
  

  describe('Buscar Pessoa', () => {
    let token;
  
    before(() => {
      cy.api({
        method: 'POST',
        url: 'https://health-passaport-homolog.azurewebsites.net/connect/token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: true,
        body: {
          client_id: 'psp_spa',
          client_secret: 'k%s5y&#~kXjf5dC*',
          scopes: 'patient_care_api,essential_health_api',
          grant_type: 'client_credentials'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('access_token');
        token = response.body.access_token;
      });
    });
  
    
    it('Buscar Pessoa', () => {
          cy.api({
            method: 'GET',
            url: 'https://patient-care-homolog.azurefd.net/integration/api/v2/persons',
            qs: {
              programSlug: 'aps_gestao_de_pacientes',
              phoneNumber: '71991608290',
              document: '84898648886'
            },
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array').that.is.not.empty;
            expect(response.body).to.have.length.gt(1);

            
            // Verificar a propriedade 'idPerson' para cada objeto no array
            response.body.forEach((item) => {
              expect(item).to.have.property('idPerson');
            });
      
            console.log(response.body);
          });
        });
      });
      
      describe('Buscar Paciente', () => {
        let token;
      
        before(() => {
          cy.request({
            method: 'POST',
            url: 'https://health-passaport-homolog.azurewebsites.net/connect/token',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: true,
            body: {
              client_id: 'psp_spa',
              client_secret: 'k%s5y&#~kXjf5dC*',
              scopes: 'patient_care_api,essential_health_api',
              grant_type: 'client_credentials'
            }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('access_token');
            token = response.body.access_token;
          });
        });
      
        it('Buscar Paciente', () => {
          cy.api({
            method: 'GET',
            url: 'https://patient-care-homolog.azurefd.net/integration/api/v2/followuppatients',
            qs: {
              programOrFollowupSlug: 'aps_gestao_de_pacientes',
              phoneNumber: '71991608290',
              document: '19631232638'
            },
            headers: {
              Authorization: `Bearer ${token}`
            }
          }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array').that.is.not.empty;
      
            // Verificar o idFollowUpPatient e o cpf para cada objeto no array
            response.body.forEach((item) => {
              expect(item).to.have.property('idFollowUpPatient');
              const firstPatient = response.body[0];
              expect(firstPatient).to.have.property('cpf').and.to.equal('60972878793');
              
              
            });
      
            console.log(response.body);
          });
        });
      });
      

      describe('Cadastro de nova pessoa via API', () => {
        it('Deve cadastrar uma nova pessoa com sucesso', () => {
          cy.api({
            method: 'POST',
            url: 'https://patient-care-homolog.azurefd.net/integration/api/v2/persons',
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE2ODc1NDcwNTQsImV4cCI6MTY4NzU1NDI1NCwiaXNzIjoiaHR0cHM6Ly9oZWFsdGgtcGFzc3BvcnQtaG9tb2xvZy5henVyZWZkLm5ldCIsImF1ZCI6WyJodHRwczovL2hlYWx0aC1wYXNzcG9ydC1ob21vbG9nLmF6dXJlZmQubmV0L3Jlc291cmNlcyIsImVzc2VudGlhbF9oZWFsdGhfYXBpIiwiaGVhbHRoX3Bhc3NhcG9ydF9tYW5hZ2VyX2FwaSIsInBhdGllbnRfY2FyZV9hcGkiLCJwc3BfYXBpIl0sImNsaWVudF9pZCI6InBzcF9zcGEiLCJwYXRpZW50X2NhcmUiOlsiZnVsbC1hY2Nlc3MiLCJpbnRlZ3JhdGlvbiJdLCJzY29wZSI6WyJlc3NlbnRpYWxfaGVhbHRoX2FwaSIsImhlYWx0aF9wYXNzYXBvcnRfbWFuYWdlcl9hcGkiLCJwYXRpZW50X2NhcmVfYXBpIiwicHNwX2FwaSJdfQ.jahV8JMN3QSySqrjdtyM_ThnF6tq50L98ndnHcNGJk3jH16ENPpjajwyt3Y1cmGdiEwOeMuZigeLJe5TJBysyHgONKKb06lIRzEzsT-cImMpljci3W7ISLgmZ67B-PWSNHKboeh44WQQN2_n6ivIGHxp90Lek0zv59CkgJfl3SMK_XD9iBrwigJ9hLrVRz5FYabdRJmKyfPlKsvms2D5Ya2iODWdyi0HqKyli2mKQ58cvxIF_ZZiqk7kk7D0gnPJCFr01U-nIJAmD--Ye5_ut21g-P4hR3lQeTMY2fiW4JGBo0ItOZ4WUDmXeQATSFDsrQNzIPcLrCwzhgXhPkmrDQ',
              'Content-Type': 'application/json'
            },
            body: {
              "programSlug": "aps_gestao_de_pacientes",
              "name": "Criando nova pessoa via API",
              "socialName": "Sexta feira 16",
              "mainPhone": "71991608290",
              "typeMainPhone": "Residential",
              "phone2": "2112345678",
              "typePhone2": "Residential",
              "phone3": "21000000000",
              "typePhone3": "Residential",
              "document": "16017186167",
              "country": "Brazil",
              "typePerson": "PrivateIndividual"
            }
          }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.document).to.eq('16017186167');

            // Verifique outras propriedades da resposta conforme necessário
            // Exemplo: expect(response.body.name).to.eq("Nome esperado");
          });
        });
      });
      