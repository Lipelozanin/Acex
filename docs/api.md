# API - Sistema de Gestão FInanceira

## Visão Geral
Este documento descreve os endpoints iniciais e o fluxo de autenticação da API.

---

## Módulos principais

- Autenticação de usuários
- Gestão de despesas
- Gestão de gastos fixos
- Dashboards

---

## Endpoints: Autenticação

Método: POST | Endpoint: /auth/login | Descrição: Login do usuário, retorna token JWT

Método: POST | Endpoint: /auth/register/step1 | Descrição: primeira etapa do cadastro, recebe nome completo, email e senha.

Método: POST | Endpoint: /auth/register/step2 | Descrição: segunda etapa do cadastro, recebe dados financeiros (como renda e gastos fixos mensais). Após isso atualiza usuário criado.

Método: GET | Endpoint: /auth/profile | Descrição: recupera os dados do usuário, após login. (etapa exige autenticação)

## Endpoints: Gestão de despesas

Método: GET | Endpoint: /expenses | Descrição: lista todas as despesas do usuário. (etapa exige autenticação)

Método: POST | Endpoint: /expenses | Descrição: cria uma nova despesa/gasto (etapa exige autenticação)

Método: PUT | Endpoint: /expenses/:id | Descrição: atualiza uma despesa pelo ID (etapa exige autenticação)

Método: DELETE | Endpoint: /expenses/:id | Descrição: deleta uma despesa pelo ID (etapa exige autenticação)

## Endpoints: gastos fixos

Método: POST | Endpoint: /user/expenses/fixed | Descrição: permite que o usuário adicione um gasto fixo (etapa exige autenticação)

Método: PATCH | Endpoint: /user/expenses/fixed/:id | Descrição: permite que o usuário atualize seus gastos fixos (etapa exige autenticação)

## Endpoints: dashboards

Método: GET | Endpoint: /dashboard/by-category | Descrição: retorna total de despesas por categoria (etapa exige autenticação)

Método: GET | Endpoint: /dashboard/details/by-category | Descrição: retorna lista de despesas por uma categoria especifica (etapa exige autenticação)

OBS.: poderam ser adicionados mais endpoints, conforme quantidade de gráficos.

---

## Fluxo de autenticação (JWT)

1. Usuário envia e-mail e senha para `POST /auth/login`.
2. Backend valida as credenciais.
3. Se autorizado, backend gera e retorna um token JWT.
4. Token é armazenado no frontend.
5. Em requisições autenticadas, o token é enviado no cabeçalho: 'Authorization: Bearer <seu_token_jwt>'.
6. Middleware no backend verifica o token antes de liberar o acesso.

---

## Possível modelo de organização do projeto

- `/src/controllers` – Lógica dos endpoints
- `/src/routes` – Definição das rotas
- `/src/middlewares` – Middleware de autenticação JWT
- `/src/models` – Modelos e regras de banco de dados
- `/src/config` – Configurações (banco, variáveis ambiente, etc.)