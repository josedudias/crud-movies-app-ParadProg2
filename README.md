# Aplicativo CRUD de Filmes

Este é um aplicativo CRUD (Create, Read, Update, Delete) de filmes desenvolvido com React, TypeScript e Vite. O projeto utiliza uma API REST simulada com `json-server` para gerenciar os dados dos filmes.

## Estrutura do Projeto

```plaintext
.gitignore
db.json
eslint.config.js
index.html
package.json
public/
README.md
src/
    App.css
    App.tsx
    assets/
    components/
        MovieForm.tsx
        MovieList.tsx
    index.css
    main.tsx
    types/
        Movie.ts
    vite-env.d.ts
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Arquivos principais

- `db.json`: Arquivo JSON que simula um banco de dados para a API REST.
- `eslint.config.js`: Configuração do ESLint para garantir a qualidade do código.
- `index.html`: Arquivo HTML principal que carrega o aplicativo React.
- `package.json`: Contém as dependências e scripts do projeto.
- `src/`: Diretório principal do código-fonte.
  - `App.tsx`: Componente principal do aplicativo.
  - `components/`: Contém os componentes React.
    - `MovieForm.tsx`: Formulário para adicionar e editar filmes.
    - `MovieList.tsx`: Lista de filmes adicionados.
  - `types/`: Contém definições de tipos TypeScript.
    - `Movie.ts`: Define a interface Movie.
  - `main.tsx`: Ponto de entrada do aplicativo React.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm run dev`

Inicia o servidor de desenvolvimento. Abra [http://localhost:5173](http://localhost:3000) para visualizar no navegador.

### `npm run build`

Compila o aplicativo para produção na pasta `dist`.

### `npm run lint`

Executa o ESLint para verificar a qualidade do código.

### `npm run preview`

Visualiza a versão de produção do aplicativo.

### `npm run serve:json`

Inicia o `json-server` para simular a API REST. A API estará disponível em [http://localhost:3001](http://localhost:3001).

## Componentes

### `MovieForm.tsx`

Este componente é responsável por renderizar um formulário para adicionar ou editar filmes. Ele utiliza o estado local para gerenciar os valores dos campos do formulário.

### `MovieList.tsx`

Este componente renderiza uma lista de filmes. Cada filme é exibido com um botão "Deletar" que permite remover o filme da lista e "Editar" que permite editar um filme. A função `handleDelete` faz uma requisição DELETE para a API e atualiza o estado local para remover o filme da lista.

## Configuração do TypeScript

- `tsconfig.app.json`: Configurações específicas para o aplicativo, incluindo o alvo ES2020, suporte a JSX e regras de linting estritas.

- `tsconfig.node.json`: Configurações específicas para o ambiente Node.js, incluindo o alvo ES2022 e suporte a módulos ESNext.

## Configuração do ESLint

O arquivo `eslint.config.js` configura o ESLint para usar as recomendações do TypeScript e plugins específicos para React e hooks do React.
