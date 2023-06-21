# Refactoring

- Antes de começar
  1. Abra um terminal na pasta do banco de dados extraídos e execute o seguinte comando para configurar o banco:

     ```sql
     bash ./create-database
     ```

  2. Abra um terminal na pasta do back-end e execute o seguinte comando:

     ```bash
     npm i # para instalar todas as dependências
     node src/server.js # para executar o servidor
     ```

O back-end dado neste exercício poderia estar mais bem organizado: todo o código da aplicação está no arquivo `src/app.js`. Separe o código nas camadas router, controller, service e repository.
