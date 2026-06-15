# Guia para instalar e rodar o postgres

## Instale o Postgres (No linux)

```shell
sudo apt install postgresql
```

OBS: Ou baixe de repositórios com versões mais atualizadas...

## Acesse o Postgres com user padrão

```shell
sudo -u postgres psql
```

## Crie seu user próprio para a API (recomendado)

Não uses o usuário **postgres** em produção.

```sql
CREATE USER usuario WITH PASSWORD 'senha';
```

## Dê permissão ao user para criar bases de dados

```sql
ALTER USER usuario CREATEDB;
```

## Crie a base de dados

```sql
CREATE DATABASE nome_do_banco_de_dados OWNER usuario;
```
