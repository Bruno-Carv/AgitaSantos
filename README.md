<!--
*** Obrigado por estar vendo o meu README. Agora vamos rodar esse projeto incrível :D
-->

<p align="center"><img src="https://github.com/Bruno-Carv/MaratoraESAMC2020/blob/master/Web/src/assets/logo-agitasantos.png?raw=true" width="400"></p>

<!-- TABLE OF CONTENTS -->

## Tabela de Conteúdo

- [Tabela de Conteúdo](#tabela-de-conte%C3%BAdo)
- [Sobre o Projeto](#sobre-o-Agita-Santos)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
    - [Passo Adicional no Android](#passo-adicional-no-android)
  - [Edição](#edi%C3%A7%C3%A3o)
  - [Publicação](#publica%C3%A7%C3%A3o)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Licença](#licen%C3%A7a)
- [Contato](#contato)

## Sobre o Agita Santos

Este projeto foi desenvolvido para uma maratona da universidade da ESAMC Santos, que tem como objetivo ajudar os artistas da cidade de santos para ter uma ferramenta de divulgação, onde empresas e fãs possam ter acesso a seu perfil artistico, assim o aplicativo o artista pode posta as fotos, compartilhar para redes sociais. 

## Interface de aplicação

### Aplicação Mobile

<p align="center"><img src="https://github.com/Bruno-Carv/MaratoraESAMC2020/blob/master/Doc/mobile%20(1).PNG?raw=true" width="100"></p>
<p align="center"><img src="https://github.com/Bruno-Carv/MaratoraESAMC2020/blob/master/Doc/mobile%20(3).PNG?raw=true" width="100"></p>
<p align="center"><img src="https://github.com/Bruno-Carv/MaratoraESAMC2020/blob/master/Doc/mobile%20(5).PNG?raw=true" width="100"></p>
<p align="center"><img src="https://github.com/Bruno-Carv/MaratoraESAMC2020/blob/master/Doc/mobile%20(6).PNG?raw=true" width="100"></p>

### Aplicação Web

<p align="center"><img src="https://github.com/Bruno-Carv/MaratoraESAMC2020/blob/master/Web/src/assets/logo-agitasantos.png?raw=true" width="400"></p>

## Tecnologias aplicadas


## Estrutura de Arquivos

```bash
MaratoraESAMC2020
├── Backend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── controllers/
│   │   │   │   ├── ArtistController.js
│   │   │   │   ├── CommunityController.js
│   │   │   │   ├── EventController.js
│   │   │   │   └── FeedControllers.js
│   │   │   ├── models/
│   │   │   │   ├── Artist.js
│   │   │   │   ├── Community.js
│   │   │   │   ├── Event.js
│   │   │   │   └── Feed.js
│   │   │   └── secure/
│   │   │       └── token.js
│   │   ├── database/
│   │   │   └── index.js
│   │   ├── routes/
│   │   │   ├── artistRouter.js
│   │   │   ├── communityRouter.js
│   │   │   ├── eventsRouter.js
│   │   │   ├── feedRouter.js
│   │   │   └── router.js
│   │   ├── services/
│   │   │   ├── aws/
│   │   │   │   ├── index.js
│   │   │   │   └── s3.js
│   │   │   ├── cloud/
│   │   │   │   ├── index.js
│   │   │   │   ├── key.json
│   │   │   │   └── storage.js
│   │   ├── validator/
│   │   │   └── artistValidation.js
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   ├── .gitignore
│   ├── yarn.lock
│   ├── package.json
│   └── README.md
├── Mobile/
│   ├── .expo-shared/
│   │   └── assets.json
│   ├── assets/
│   │   ├── icon.png
│   │   └── splash.png
│   ├── src/
│   │   ├── assets/
│   │   │   ├── Pintor.jpg
│   │   │   ├── logo-agitasantos-hori.png
│   │   │   ├── logo-agitasantos.png
│   │   │   └── logoPrefeitura.png
│   │   ├── components/
│   │   │   ├── AlbumCamera.js
│   │   │   ├── CameraButton.js
│   │   │   ├── button.js
│   │   │   ├── facebookSignIn.js
│   │   │   ├── feed.js
│   │   │   ├── filter.js
│   │   │   ├── googleSignIn.js
│   │   │   ├── input.js
│   │   │   ├── linha.js
│   │   │   └── loading.js
│   │   ├── pages/
│   │   │   ├── Cam
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   ├── Freelancer
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   ├── Photo
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   ├── home
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   ├── loading
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   ├── maps
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   ├── profile
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   ├── signin
│   │   │   │   ├── index.js
│   │   │   │   └── styles.js
│   │   │   └── signup
│   │   │       ├── index.js
│   │   │       └── styles.js
│   │   ├── services/
│   │   │   ├── api.js
│   │   │   └── auth.js
│   │   └── routes.js
│   ├── .gitignore
│   ├── App.js
│   ├── README.md
│   ├── app.json
│   ├── babel.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── yarn-error.log
│   └── yarn.lock
├── Doc/
│   ├── .env.example
│   ├── .gitignore
│   ├── yarn.lock
│   ├── package.json
│   └── README.md
└── Web/
    ├── public/
    │   ├── favicon.png
    │   └── index.html
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   ├── layout/
    │   ├── pages/
    │   ├── services/
    │   ├── styles/
    │   │   ├── css/
    │   │   │   ├── global.min.css
    │   │   │   └── global.min.css.map
    │   │   └── scss/
    │   │       └── global.scss
    │   ├── App.js
    │   ├── index.js
    │   └── routes.js
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── server.js
    ├── yarn.lock
    └── README.md
```

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->

## Contato

Bruno Silva Carvalho - [Github](https://github.com/bruno-carv)