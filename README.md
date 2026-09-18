# Criação da API - TypeScript

Arquitetura MVC - VIEW, CONTROLLER, MODEL
- VIEW - Aquilo que o Usuário Vê (Interface);
- CONTROLLER - Intermediador (Coordenação);
- MODEL - Dados e Regras do Sistema (Lógica).

Aplicação a ser Construída - Sistema de Clínica Médica
- Resources - usuários (secretários), pacientes, médicos, consultas;
- Endpoints - findOne, findAll, create, update, delete;
- Telas - login, home, cadastro/alteração de paciente, cadastro/alteração de consultas.

### Inicializando o projeto Node.js

* `npm init -y` — Cria automaticamente o arquivo `package.json` com as configurações padrão do projeto.

### Configurando o projeto como ES Module

* `npm pkg set type="module"` — Define o projeto como **ES Module**, permitindo utilizar `import` e `export` no TypeScript/JavaScript.

### Instalando dependências da API

* `npm install express dotenv zod` — Instala **Express** para criar a API, **Dotenv** para variáveis de ambiente e **Zod** para validação de dados.

### Instalando dependências de desenvolvimento

* `npm install -d typescript tsx @types/express @types/node` — Instala o **TypeScript**, **tsx** para executar arquivos TypeScript, e as tipagens do **Express** e **Node.js**.

### Criando a configuração do TypeScript

* `npx tsc --init` — Cria o arquivo `tsconfig.json`, que define as configurações de compilação do TypeScript.