# Guia de instalação do ORM Prisma

## Instale o prisma

```shell
npm install prisma --save-dev
```

## Instale o driver do banco de dados para o prisma

```shell
npx prisma init --datasource-provider postgresql
```

## Configure o arquivo .env

```.env
DATABASE_URL=postgres://user:pass@host:5432/db
```
