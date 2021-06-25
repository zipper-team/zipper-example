# zipper-example

Esse é um projeto simples para exemplificar o contrato de quais informações e quais endpoints esperamos.

[Documentação swagger](https://app.swaggerhub.com/apis-docs/rdoVieira01/IntegrationExample/1.0.0)

Os models declarados não "engessam" os dados que retornam da origem.

Para utilizar o projeto:

Clone este repositório
> git clone https://github.com/zipper-team/zipper-example.git

Instale as dependências
> npm install

E inicie o servidor
> npm run start

Por padrão foi utilizada uma conexão com mssql para exemplo, o projeto utiliza as credenciais de um .env na raiz do projeto

```jsx
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

As queries para consulta de dados estão disponível em /src/Queries.ts que podem ser alteradas.

Os endpoints e seus retornos estão documentados na página do Swagger no inicio.
