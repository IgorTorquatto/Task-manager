
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
