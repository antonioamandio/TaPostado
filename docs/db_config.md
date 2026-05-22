# Instale o postgres (No linux)

sudo apt install postgresql-x

x => Versão do postgres. Ex: 18

# Acessar postgres com user padrão (Apenas para lembrar o comando)

sudo -u postgres psql

# Crie seu user próprio para a API (recomendado)

Não uses postgres em produção.

```sql
CREATE USER blog_user WITH PASSWORD 'blog_pass';
```

# crie a base de dados do app

```sql
CREATE DATABASE blog_db;
```

# Dê permissão ao user para criar bases de dados

```sql
ALTER USER blog_user CREATEDB;
```
