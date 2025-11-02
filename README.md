## 📋 Pré-requisitos

Antes de executar os testes, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🚀 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/Monique_Automacao_Web.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd Monique_Automacao_Web
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## ▶️ Executando os Testes

Para executar a suíte de testes, use um dos seguintes comandos:

- Executar testes em modo headless (terminal):
  ```bash
  npx cypress run
  ```

- Abrir a interface do Cypress:
  ```bash
  npx cypress open
  ```

- Executar teste específico:
  ```bash
  npx cypress run --spec "cypress/tests/automation-exercise.cy.js"
  ```

## 📊 Gerando Relatórios de Testes

Este projeto utiliza **Mochawesome** para gerar relatórios HTML detalhados dos testes.

### Opção 1 - Executar testes e gerar relatório automaticamente:
```bash
npm run test:report
```

### Opção 2 - Gerar relatório a partir de testes já executados:
1. Execute os testes:
   ```bash
   npm test
   ```

2. Mescle os arquivos JSON:
   ```bash
   npm run report:merge
   ```

3. Gere o relatório HTML:
   ```bash
   npm run report:generate
   ```

### Visualizar o relatório:
Após a geração, abra o arquivo:
- `cypress/reports/mochawesome/report.html` no seu navegador

O relatório incluirá:
- ✅ Resumo de testes (passou/falhou)
- 📊 Gráficos e estatísticas
- 🖼️ Screenshots embutidos (em caso de falhas)
- ⏱️ Tempo de execução de cada teste

## 📁 Estrutura do Projeto

```
cypress/
├── support/
│   ├── locators/           # Seletores CSS/XPath
│   ├── actions/            # Métodos/ações das páginas
│   └── e2e.js             # Configurações globais
├── modules/                # Lógica de negócio
│   └── user.module.js
├── tests/                  # Casos de teste
│   └── automation-exercise.cy.js
└── fixtures/               # Dados de teste
```

## 🧪 Casos de Teste

Os casos de teste estão localizados no diretório `cypress/tests`. Cada arquivo de teste corresponde a uma funcionalidade específica do site Automation Exercise.

### Testes Implementados:
- ✅ #1 - Registrar um usuário
- ✅ #2 - Fazer login com email e senha corretos
- ✅ #3 - Fazer login com email e senha incorretos
- ✅ #4 - Fazer logout do usuário
- ✅ #5 - Tentar registrar um usuário existente
- ✅ #6 - Validar formulário de contato
- ✅ #8 - Verificar produtos e página de detalhes
- ✅ #9 - Buscar produto
- ✅ #10 - Verificar inscrição na página inicial
- ✅ #15 - Realizar pedido: registrar antes do checkout

## 🛠️ Ferramentas e Bibliotecas

Este projeto utiliza as seguintes ferramentas:

- [Cypress](https://www.cypress.io/) - Framework de testes E2E
- [Faker.js](https://fakerjs.dev/) - Geração de dados aleatórios para testes
- [Allure](https://allurereport.org/) - Relatórios de testes detalhados
- [Mochawesome](https://www.npmjs.com/package/mochawesome) - Relatórios HTML

## 🏗️ Arquitetura

O projeto segue o padrão de **separação de responsabilidades**:

- **Locators**: Apenas seletores CSS/XPath
- **Actions**: Métodos reutilizáveis de interação com páginas
- **Tests**: Cenários de teste (o que testar)
- **Modules**: Lógica de negócio complexa
