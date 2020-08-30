## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Criar projeto

```bash
$ nest new {nome_projeto}
```

## Instalar nest config

```bash
npm install --save @nestjs/config
```

## Instalar TypeOrm (usando sqllite3)

```bash
npm install --save @nestjs/typeorm typeorm sqlite3
```
## Adicionar no package.json

```bash
"typeorm": "ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js"
```

## Criar Migração

```bash
npm run typeorm migration:create -- -n CreateCategoriaTable
-
npm run typeorm migration:run
```

## Criar modulo

```bash
nest generate module categorias    
```

# Criar controller

```bash
 nest generate controller -n categorias -d src/categorias/controller
 ```

 # Criar service

```bash
 nest generate controller -n categorias -d src/categorias/controller
 ```


## Criar Entidade

```bash
npm run typeorm entity:create -- -n categoria.models -d src/categorias/models
```

## Swagger

```bash
npm install --save @nestjs/swagger swagger-ui-express
```

## Swagger

```Class validator
npm install --save class-validator
npm install --save class-transformer
```


