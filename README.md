
# Sistema de Gerenciador de Tarefas

Este é o projeto de um Sistema de Gerenciador de Tarefas, onde o usuário pode se registrar, fazer login, adicionar, remover e atualizar tarefas além de poder visualizar a lista de tarefas.

## 1ª Etapa: Front-end

Tecnologias utilizadas:
- Vite
- ReactJS
- Bootstrap
- Yup
- React Router DOM
- Yarn
- Styled-components

### Passos para configuração do projeto:

1. Criação do projeto React com Yarn e Vite.
2. Instalar as dependências com o comando `yarn`.
3. Para executar o front-end, use o comando `yarn dev`.
4. Realizar uma limpeza nos arquivos que já vêm com a instalação do Vite.
5. Adicionar o Bootstrap via CDN e a fonte via Google Fonts no arquivo `index.html`.
6. Criar os estilos globais com Styled-components criando um arquivo `globalStyles.js` na pasta `styles`.
7. Utilizar o `GlobalStyle` criado em `App.jsx` como componente.

## 2ª Etapa: Front-end - Páginas Iniciais

A primeira página será a de login do usuário, com email e senha.

### Passos para criação das páginas:

1. Criar uma pasta `pages`.
2. Dentro da pasta `pages`, criar uma subpasta para cada página, com um arquivo `index.jsx` e um arquivo `styles.js` ou `module.css` para cada página.
3. Decidir a criação dos componentes utilizando o React Arrow Function Components.
4. Instalar as dependências: Bootstrap, Font-Awesome e MDB React UI com o comando `yarn`.
5. Adicionar a importação das dependências instaladas no arquivo `App.jsx`.
6. Criar a página de login utilizando `mdb-react-ui` e `bootstrap`.
7. Criar as rotas por meio da dependência `react-router-dom` para possibilitar a navegação para a página de registro do usuário.
8. Criar o arquivo `Router.jsx` em `src`, importar cada página/componente e relacionar a um `path`.
9. Atualizar o arquivo `App.jsx` para que ele contenha o `BrowserRouter`.
10. Criar na pasta `Register`, que está dentro da pasta `pages`, uma nova página.

## 3ª Etapa: Back-end

### Passos para configuração do back-end:

1. Instalar o Express e criar o código inicial do back-end.
2. Criar o banco de dados relacional utilizando MySQL:
   - Nome do banco de dados: `gerenciador_de_tarefas`
   - Username: `user_gerenciador_de_tarefas`
   - Password: `123456`
   - Criar um arquivo `mysql_config.js` para configurar e exportar um módulo com os dados do banco de dados.
3. Realizar a conexão do código Node.js com o banco de dados e realizar testes para verificar o funcionamento.
4. Verificar se as dependências iniciais do projeto foram adicionadas corretamente (`mysql2`, `cors`, `express`, `body-parser`) e utilizar os métodos:
   - `use(cors())` para habilitar o CORS.
   - `use(bodyParser.json())` para processar JSON no corpo das requisições.
5. Criar uma tabela `users` no banco de dados com as seguintes colunas:
   - `id`
   - `name`
   - `email`
   - `password`
   - `created_at`
   - `updated_at`
   - `deleted_at`
6. Criar uma rota do tipo POST para adicionar os dados dos usuários na tabela `users` do banco de dados.

## 4ª Etapa: Front-end

### Validação do formulário de cadastro de usuário:

1. Criar a validação do formulário de cadastro do usuário utilizando a biblioteca `yup`.
