# Autenticação — Trilha Front-end

Atividade de estudo em React + TypeScript + Vite: tela de login, rota protegida (`PrivateRoute`) e tela de perfil, consumindo a API fake [DummyJSON](https://dummyjson.com/docs/auth).

## Rodando o projeto

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Login de teste

A API fake exige um usuário que já existe na base dela:

- **Usuário:** `emilys`
- **Senha:** `emilyspass`

Outros usuários de teste podem ser vistos em `https://dummyjson.com/users` — todos seguem o padrão de senha `<username>pass`.

## Estrutura

- `src/pages/Login.tsx` — formulário de login, chama `login()` e guarda o token no `localStorage`.
- `src/pages/Perfil.tsx` — rota protegida, busca os dados do usuário logado (`GET /auth/me`).
- `src/routes/PrivateRoute.tsx` — bloqueia acesso a `/perfil` sem token válido.
- `src/services/auth.ts` — chamadas à API (`login`, `perfil`).
