# API de Gerenciamento de Irrigação

### Instalação

1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd API-GerenciamentoIrrigacao
```

2. instalar dependências

```bash
npm install
```

3. Criar arquivo `.env` na raiz do projeto

```bash
JWT_SECRET="chaveSecreta123"
```

4. Rodar o projeto

```bash
npm run dev
```

### Etapas

1. Registrar usuário

POST http://localhost:3030/auth/register

```json
{
  "username": "usuarioTeste",
  "password": "1234"
}
```

2. Login

POST http://localhost:3030/auth/register

```json
{
  "username": "usuarioTeste",
  "password": "1234"
}
```

retorno:

```json
{
  "message": "Login efetuado com sucesso!",
  "generatedToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

> copie o **"generatedToken"** que deve usado no header Authorization para acessar rotas protegidas.

### Rotas protegidas (JWT)

> Todas precisam do Token JWT no header

```bash
Authorization: Bearer <SEU_TOKEN_AQUI>
```

- ### Pivôs

GET /pivots → Listar todos os pivôs do usuário autenticado.

GET /pivots/:id → Obter um pivô específico

POST /pivots → Criar um novo pivô

```json
{
  "description": "Pivô Recém Instalado",
  "flowRate": 180.0,
  "minApplicationDepth": 6.0
}
```

PUT /pivots/:id → Atualizar um pivô existente, itens abaixo que são atualizaveis.

```json
{
  "description": "Pivô Recém Instalado",
  "flowRate": 100.0,
  "minApplicationDepth": 9.0
}
```

DELETE /pivots/:id → Remover um pivô

- ### Irrigações

GET /irrigations → Listar irrigações do usuário

GET /irrigations/:id → Obter irrigação específica

POST /irrigations → Criar irrigação

```json
{
  "pivotId": "<COLOQUE_O_ID_GERADO_NA_CRIACAO_DE_UM_PIVO>",
  "applicationAmount": "20.0",
  "irrigationDate": "2025-01-28T14:30:00Z"
}
```

DELETE /irrigations/:id → Excluir irrigação

### Testando no Insomnia

1. Registrar usuário (/auth/register)

2. Fazer login (/auth/login) e copiar o generatedToken

3. Adicionar header nas rotas protegidas:

```bash
Authorization: Bearer <SEU_TOKEN_AQUI>
```

4. Testar rotas de pivôs e irrigações, seguindo os exemplos em [Rotas protegidas (JWT)](#rotas-protegidas-jwt)
