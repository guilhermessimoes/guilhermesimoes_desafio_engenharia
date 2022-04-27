# Desafio Engenharia
  
Neste repositório, conterá todo os softwares necessários para rodar o projeto "guilhermesimoes_desafio_engenharia".  

# Sobre mim
`Nome`: Guilherme Junio Silva Simões
`Universidade`: Pitagoras
`Curso`: Desenvolvimento Web
`Semestre Atual`: Terceiro Período
  
## 1. Guia de pastas
  
A pasta bin contem meu arquivo aonde faço a configuração do servidor: `bin/`  
  
A pasta conntroller fica toda regra de negocio: `controller/`

A pasta dataBase tem a configuração do banco de dados, migrations e seeders: `database/`

A pasta models tem o modelo de banco de dados referente a minha tabela: `models/`

A pasta routes fica minhas rotas: `routes/`


## 2. Colocando a rodar
  
*Obs: todos comandos abaixos devem ser rodados nesta pasta raiz*
1. Rodar o comando: `npm install` instalar as dependencias.
2. Colocar o arquivo .env na raiz do projeto.
3. Colocar as variaveis de ambiente dentro da pasta `database/connfig`. O arquivo .envExample, é o  env de exemplo como deveser colocado.
4. Instalar o cli do sequelize `npm install --save-dev sequelize-cli`.
5. Instalar o mysql em sua maquina e configurar o mesmo.
6. Com as dependencia instaladas devemos rodar o comando do sequelize(ORM), `npx sequelize db:migrate`: Esse comando roda local dependendo de como voce instalou o CLI, se foi global ou local, geralmente instalo somente local. Para global usar o npm.
7. Vamos utilizar o comando `npx sequelize db:seed:all`  


## 3. Implementando Code Pattern com ESLint
Para integrar o ESLint ao Visual Studio Code, você precisará instalar a extensão ESLint para o Visual Studio Code. Navegue de volta para o Visual Studio Code e pesquise ESLint na guia Extensões. Clique em Instalar depois de localizar a extensão:  
![Instalando extensão no VSCode](https://assets.digitalocean.com/articles/linting-and-formatting-with-eslint-in-vs-code/2.png)
  
Verifique o funcionamento forçando um erro de código: exemplo, declarar uma variável em `./backend/src/server.js` como var e verifique se o vscode acusa erro.  
Tente salvar, o comportamento esperado é que o VSCode corrija o erro para você.  
  
## 4. Tecnologias aplicadas
1. Express -> Para fazer o roteamento.
2. Sequelize -> Para criar migrations e conexão com BD.
3. Mysql -> Armazenamento de informações.

## 5. Importando API para o Insomnia
1. Usar arquivo `./apiDoc/Insomnia_2022-04-27.json`
2. Importar via Insomnia seguindo o processo normal de importação de collections
