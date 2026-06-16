# Guia de instalação do ORM Prisma

## Instale o Prisma

```shell
npm install prisma --save-dev
```

## Inicialize o Prisma usando o Postgres

```shell
npx prisma init --datasource-provider postgresql
```

## Configure o arquivo .env

```.env
DATABASE_URL=postgres://user:password@host:5432/db
```

## Instale o cliente do Prisma (Com o driver do Postgres)

```shell
npm install @prisma/client
npm install @prisma/adapter-pg
```

## Configure o arquivo schema.prisma na pasta prisma/

```prisma
//prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
  //output   = "../src/generated/prisma" // Uncomment if you want to specify the output.
}

datasource db {
  provider = "postgresql"
}
```

## Configure o objecto de conexão com o banco de dados

```js
// src/config/database.js
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

export { prisma }
```
