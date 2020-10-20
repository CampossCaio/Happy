<h1 align="center">
    <img alt="happy" src="https://res.cloudinary.com/dgugs5dpz/image/upload/v1603153730/Union_1_oqjeik.png" width="250px" />
</h1>

<p align="center">🚀 Uma aplicação para para ajudar crianças em orfanatos.</p>

<h1 align="center">

 ![align="center"](https://img.shields.io/github/issues/CampossCaio/Happy?color="29B6D1")
 ![Badge](https://img.shields.io/github/forks/CampossCaio/Happy?color="29B6D1")
 ![Badge](https://img.shields.io/github/stars/CampossCaio/Happy?color="29B6D1") 
 
</h1>

<h4 align="center"> 
	🚧  Happy 🚀 Em desenvolvimento  🚧
</h4>

<p align="center">
  <a href="#-sobre-o-projeto">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar-o-projeto">Como executar o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-autor">Autor</a> 
</p>
<p align="center">
<a  href="https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta?node-id=136%3A546">
  <img alt="Happy" src="https://res.cloudinary.com/dgugs5dpz/image/upload/v1603153076/Group_11_3_ea39do.png" width="800px">
</a>
</p>

## 💻 Sobre o projeto

😃  Happy - é uma aplicação divida em duas partes:

**Web**: Uma dashboard onde o usuário pode buscar ou cadastrar orfanatos próximos para realizar uma visita.

**Mobile**:  Uma aplicativo onde o usuário pode buscar ou cadastrar orfanatos próximos para realizar uma visita.

Projeto desenvolvido durante a NLW(Next Level Week) 3.0, uma maratona intensiva sobre tecnologia realizada pela [Rocketseat](https://blog.rocketseat.com.br).

O intuito de seu desenvolvimento é praticar os conhecimentos sobre [Node.JS](https://nodejs.org/en/), [React.JS](https://reactnative.dev/), [React Native](https://reactnative.dev/), entre outras tecnologias como o [Typescript](https://www.typescriptlang.org/), adiquiridos durante a jornada.  

---

## 🎨 Layout


<a href="https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta?node-id=136%3A546">
  <img alt="Happy" src="https://res.cloudinary.com/dgugs5dpz/image/upload/v1603160078/Peek_2020-10-19_23-13_puptlo.gif">
</a>

<p align="center">
 <a href="https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta?node-id=136%3A546">
  <img alt="Happy" src="https://res.cloudinary.com/dgugs5dpz/image/upload/v1603159872/Peek_2020-10-19_23-09_ei5tvu.gif">
</a>
</p>


## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend (pasta backend) 
2. Frontend (pasta web)
3. mobile (pasta mobile)

💡 O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
Ter um banco de dados sql, de preferência postgres.


#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/CampossCaio/Happy.git

# Acesse a pasta do projeto no terminal/cmd
$ cd happy

# Vá para a pasta server
$ cd backend

# Instale as dependências
$ npm install

# Execute o comando abaixo para executar as migrations
$ npx typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
$ yarn dev ou npm run dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```

---

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start ou yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

#### 🧭 Rodando a aplicação mobile (Frontend)

```bash

# Vá para a pasta da aplicação Front End
$ cd mobile

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run android ou npm run ios


```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**

#### **Mobile**  ([React Native](https://reactnative.dev/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Expo](https://expo.io/)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[React Icons](https://react-icons.github.io/react-icons/)**
-   **[Axios](https://github.com/axios/axios)**




#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Sqlite3](https://www.sqlite.org/index.html)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[Multer](https://github.com/expressjs/multer)**


## 🦸 Autor

<a href="https://github.com/CampossCaio">
 <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/52550525?s=400&u=c8dfc4e1c8ef1bf3ed5890ecc40ee98f086ca72b&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Caio Campos</b></sub></a> <a href="https://github.com/CampossCaio" title="Caio Campos">🚀</a>
 <br />

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por **Caio Campos** 👋🏻 [Get in touch!](https://github.com/CampossCaio)
