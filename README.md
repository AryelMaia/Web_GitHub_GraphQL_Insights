# Server_GitHub_GraphQL_Insights
Server que acessa a API do GitHub Graph QL, realiza leitura dos Commits histórios do Projeto Linux, armazena os dados e informar insights dos maiores contribuidores

Configuração das Ferramentas
------------------------
- Node.JS V14.16.1
- NPM V6.14.12


Passo-a-passo
------------------

1 - Executar o comando NPM Install no repositório

2 - Por Default o Web irá rodar na Porta 3000 e irá realizar a leitura do Servidor pela porta 3001. Caso tenha alterado a porta do servidor, você deve alterar as configurações em './src/api.JS' na Linha 04, alterando a porta 3001 para a escolhida.

3 - O Servidor e a Aplicação Web estarão alocados localmente, se comunicando através da API Rest no mesmo domínio, portanto, nesse cenário algumas proteções de CORS Policy iram disparar. Para solucionar esse problema é necessário instalar a Extensão Moesif Origin & CORS Changer no Chrome para alterar a origem da solicitação e diferenciar o domínio da solicitação e server.

=> Link para Download: https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related

4. Com a extensão instalada é necessário somente iniciar o Server através do Comando "npm start", acionar a Extensão para "On" e iniciar a Aplicação Web também com "npm start". 

5. Feito isso você pode acessar a Aplicação Web em http://localhost:3000/



