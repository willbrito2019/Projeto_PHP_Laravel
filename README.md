# Sistema de Postagens - PHP Laravel

## Descrição
   Projeto desenvolvido com Laravel (PHP), utilizando a arquitetura MVC. O sistema simula um cadastro e listagem de postagens, com integração ao banco MySQL utilizando o ORM Eloquent. O controle de versão do banco é feito via Migrations.

   O foco é demonstrar domínio de estruturas modernas no ecossistema PHP e boas práticas em organização de código.

## Tecnologias Utilizadas
   - Linguagem: PHP
   - Framework: Laravel
   - ORM: Eloquent
   - Banco de dados: MySQL

## Como Executar

1. Instale o Composer:
   - [https://getcomposer.org/Composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe)

2. Habilite extensões no `php.ini`:
   - fileinfo
   - openssl
   - pdo
   - mbstring
   - tokenizer
   - xml
   - ctype
   - json
   - zip
   - sqlite3
   - pdo_mysql

3. Crie o projeto:  
   - composer create-project laravel/laravel nome-do-projeto

4. Configure o .env:
   - DB_CONNECTION=mysql
   - DB_HOST=127.0.0.1
   - DB_PORT=3306
   - DB_DATABASE=teste_laravel
   - DB_USERNAME=root
   - DB_PASSWORD=sua_senha

5. Execute as migrations:
   - php artisan migrate
   
6. Rode o projeto:
   - php artisan serve
      
Demonstração
   - http://127.0.0.1:8000/posts       

=======
# Microsserviços - Sistema de Pedidos

## Descrição
   Este projeto demonstra uma arquitetura de microsserviços utilizando Node.js e MongoDB. Os serviços estão divididos entre:

   - **Serviço de Usuários**: responsável por cadastro e listagem de usuários.
   - **Serviço de Pedidos**: realiza a criação e associação de pedidos aos usuários.

   Essa separação facilita a escalabilidade, organização e manutenibilidade do sistema. A comunicação entre os serviços é feita via APIs REST.

## Tecnologias Utilizadas
   - Linguagem: JavaScript
   - Framework: Node.js (Express)
   - Banco de dados: MongoDB

## Como Executar

1. Inicie o MongoDB:  
   - mongod

2. Rode os serviços:
   - Users Service	
      - cd users-service
      - npm install
      - node server.js

   - Orders Service
      - cd orders-service
      - npm install
      - node server.js
      
Endpoints de Teste     
   - GET http://localhost:4000/users
   - POST http://localhost:4000/users
   - POST http://localhost:5000/orders       


