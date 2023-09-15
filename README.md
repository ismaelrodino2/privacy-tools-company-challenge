# Locadora de Filmes

Este projeto consiste em uma aplicação web responsiva que utiliza a API do OMDb para obter informações sobre filmes. A API oferece um serviço RESTful para buscar dados de filmes, incluindo título, ano de lançamento e pôster. Os dados são contribuídos e mantidos pela comunidade de usuários.

## Funcionalidades

- Busca de filmes por palavra-chave no título.
- Navegação pelos resultados paginados.
- Visualização detalhada de cada filme, exibindo:
  - Título do filme
  - Ano de lançamento
  - Diretor
  - País
  - Tempo de duração
  - Descrição do enredo (plot)
  - Imagem do pôster

## Tecnologias Utilizadas

- React
- Vite
- Vitest (Testes Unitários)
- API OMDb (http://www.omdbapi.com/)

## Configuração

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone este repositório.
2. Instale as dependências com `npm i ou yarn`.
3. Crie um arquivo `.env` e adicione sua `VITE_API_KEY` conforme o exemplo em `.env.example`.
4. Inicie a aplicação com `npm run dev ou yarn dev`.
