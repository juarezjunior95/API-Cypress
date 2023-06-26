# Tests API Using Cypress

Testes de API com Cypress


## 🚀 Começando

Este projeto contém testes automatizados de API usando o framework de teste Cypress. Ele foi desenvolvido com o objetivo de testar as APIs de um determinado sistema e validar seu comportamento.


### 📋 Pré-requisitos

Antes de executar os testes, certifique-se de ter as seguintes dependências instaladas:

- Node.js
- Cypress

### 🔧 Instalação


Para instalar o Cypress em sua máquina e iniciar um projeto de testes, siga as etapas abaixo:

Instalação do Cypress

- 1:Certifique-se de ter o Node.js instalado em sua máquina. O Node.js é um pré-requisito para o Cypress. Você pode baixar e instalar a versão mais recente do Node.js a partir do site oficial.

- 2: Abra o terminal ou prompt de comando.

- 3:Navegue até o diretório raiz do seu projeto (ou o diretório em que você deseja criar um novo projeto de testes).

- 4:Execute o seguinte comando para inicializar o projeto com o Cypress:
npm install cypress --save-dev
- 5:Esse comando instalará o Cypress localmente no diretório do projeto e adicionará a dependência ao arquivo package.json.

- 6:Após a conclusão da instalação, você pode verificar se o Cypress foi instalado corretamente executando o comando:
npx cypress --version

Isso exibirá a versão do Cypress instalada em sua máquina.



## ⚙️ Executando os testes

Para executar os testes, siga as etapas abaixo:

- 1. Abra o Cypress:
npx cypress open

- 2. O Cypress será iniciado e uma interface gráfica será aberta.

- 3. Selecione o arquivo de teste desejado na interface do Cypress.

- 4. Os testes serão executados em uma nova janela do navegador.




### 🔩 Estrutura do Projeto
A estrutura do projeto está organizada da seguinte forma:

.
├── cypress/
│   ├── fixtures/              # Arquivos de dados de teste
│   ├── integration/           # Arquivos de testes
│   ├── plugins/               # Plugins do Cypress
│   └── support/               # Arquivos de suporte
├── .env                       # Arquivo de variáveis de ambiente
├── .gitignore                 # Arquivo de configuração do Git
├── cypress.json               # Arquivo de configuração do Cypress
├── package.json               # Arquivo de configuração do npm
└── README.md                  # Documentação do projeto

No diretório cypress/fixtures, você pode armazenar arquivos de dados de teste que serão utilizados nos testes.

No diretório cypress/integration, você encontrará os arquivos de testes escritos em Cypress.

Os plugins do Cypress são armazenados no diretório cypress/plugins.

E, por fim, o diretório cypress/support contém arquivos de suporte, como comandos personalizados ou configurações globais.




### 🔩 Contribuição
As contribuições são bem-vindas! Se você encontrar algum problema no projeto ou tiver sugestões de melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request.








