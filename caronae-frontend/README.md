# Caronae - Aplicação de Caronas para UFRJ

## Descrição do Projeto

Este projeto é uma aplicação de carona voltado para alunos e servidores da UFRJ. Ele permite que os usuários encontrem e compartilhem caronas de forma segura e eficiente. O aplicativo possui uma página para exibir todas as caronas disponíveis e uma página para exibir os detalhes de cada carona.

## Tecnologias Utilizadas

- **React**: Framework JavaScript para construir interfaces de usuário.
- **Axios**: Biblioteca para realizar requisições HTTP, usada para comunicação com a API.
- **Context API**: Utilizada para gerenciamento de estado global na aplicação.

## Pré-requisitos

### Ferramentas Necessárias

- **Node.js**: Plataforma JavaScript para execução do código no lado do servidor.
- **npm**: Gerenciador de pacotes do Node.js.

### Versões Recomendadas

- **Node.js**: v20.11.0 (Versão utilizada no desenvolvimento e recomendada para evitar incompatibilidades).

## Instruções de Instalação

### Clonar o Repositório


git clone https://github.com/DudaLeal/desafio-tecnico-caronae-2024-2.git
cd caronae-frontend


### Instalar Dependências

npm install


## Rodando o Projeto

### Iniciar o Servidor de Desenvolvimento


npm start


### Acessar a Aplicação

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Instrução de testes

### Rodar os testes

npm test

## Documentação da API

### Endpoint Usado

- **GET**: `https://mocki.io/v1/753cf50d-4bec-427f-bd07-e49387240ee3`

Esse endpoint retorna um array de objetos, onde cada objeto representa uma carona disponível. A resposta da API contém informações detalhadas sobre o motorista e a carona, incluindo nome, telefone, horários, locais de partida e chegada, entre outros.
