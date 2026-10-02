# API de Clínica Médica

API REST desenvolvida com TypeScript, Express, Prisma ORM e PostgreSQL para gerenciar pacientes e médicos.

## Tecnologias

- Node.js e TypeScript
- Express
- Prisma ORM 7
- PostgreSQL 16
- Docker Compose

## Estrutura

```text
src/
├── controllers/   # Recebe requisições e envia respostas HTTP
├── repositories/  # Consultas ao PostgreSQL via Prisma
├── routes/        # Endpoints da API
├── services/      # Regras de negócio
└── lib/           # Instância compartilhada do Prisma Client
prisma/
├── migrations/    # Histórico das migrations do banco
└── schema.prisma  # Modelos do Prisma
```

## Pré-requisitos

- Node.js 22 ou superior
- Docker Desktop

## Instalação

Instale as dependências do projeto:

```bash
npm install
```

Crie o arquivo `.env` na raiz do projeto. Para a configuração padrão do Docker, use:

```env
POSTGRES_DB="clinica"
POSTGRES_USER="clinica_user"
POSTGRES_PASSWORD="clinica_senha"
DATABASE_URL="postgresql://clinica_user:clinica_senha@localhost:5432/clinica?schema=public"
```

> O arquivo `.env` contém credenciais locais e não deve ser enviado ao Git.

## Executando com Docker

O Docker Compose inicia a API na porta `3000` e o PostgreSQL na porta `5432`:

```bash
docker compose up -d --build
```

Verifique o estado dos serviços:

```bash
docker compose ps
```

Para acompanhar os logs:

```bash
docker compose logs -f
```

## Prisma e banco de dados

O schema está em `prisma/schema.prisma`. As tabelas `Paciente` e `Medico` são criadas a partir dele.

Para criar e aplicar uma migration durante o desenvolvimento:

```bash
npx prisma migrate dev --name init
```

Após alterar o schema, gere novamente o Prisma Client:

```bash
npx prisma generate
```

Para abrir uma interface visual do banco:

```bash
npx prisma studio
```

### Instalação do Prisma

Estes são os comandos usados para adicionar Prisma 7 e o driver PostgreSQL ao projeto:

```bash
npm install @prisma/client@7 @prisma/adapter-pg pg
npm install -D prisma@7
npx prisma init --datasource-provider postgresql
```

## Executando em desenvolvimento local

Caso queira usar o hot reload do `tsx`, inicie somente o banco via Docker e execute a API localmente:

```bash
docker compose up -d db
npm run dev
```

Para compilar o projeto:

```bash
npm run build
```

## Endpoints

### Pacientes

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/pacientes` | Lista todos os pacientes |
| `GET` | `/pacientes/:id` | Busca um paciente pelo identificador |
| `POST` | `/pacientes` | Cria um paciente |
| `PUT` | `/pacientes/:id` | Atualiza um paciente |
| `DELETE` | `/pacientes/:id` | Remove um paciente |

Exemplo de criação:

```json
{
  "nome": "João Silva",
  "telefone": "11999999999"
}
```

### Médicos

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/medicos` | Lista todos os médicos |
| `GET` | `/medicos/:id` | Busca um médico pelo identificador |
| `POST` | `/medicos` | Cria um médico |
| `PUT` | `/medicos/:id` | Atualiza um médico |
| `DELETE` | `/medicos/:id` | Remove um médico |

Exemplo de criação:

```json
{
  "nome": "Dra. Ana Souza",
  "telefone": "11988888888",
  "especialidade": "Cardiologia",
  "crm": "CRM-SP 123456"
}
```

Os identificadores (`id`) são gerados automaticamente pelo PostgreSQL.
