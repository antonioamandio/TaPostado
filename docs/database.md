# Guia para instalar e rodar o postgres

## Instale o postgres (No linux)

```sql
sudo apt install postgresql
```

OBS: Ou baixe de repositórios com versões mais atualizadas...

## Acessar postgres com user padrão

```sql
sudo -u postgres psql
```

## Crie seu user próprio para a API (recomendado)

Não uses o usuário **postgres** em produção.

```sql
CREATE USER blog_user WITH PASSWORD 'blog_pass';
```

## Dê permissão ao user para criar bases de dados

```sql
ALTER USER blog_user CREATEDB;
```

## crie a base de dados do app

```sql
CREATE DATABASE blog_db;
```
