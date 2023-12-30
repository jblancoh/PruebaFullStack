Este es un proyecto de [Nestjs](https://nestjs.com/) creado con [`nest new`](https://docs.nestjs.com/cli/usages#nest-new).

## Inicio rapido

Primero, clona el repositorio:

```bash
git clone
```

Instala las dependencias:

```bash
yarn install
```

Copia el archivo `env.example` a `.env` y configura las variables de entorno:

```bash
cp env.example .env
```

Ejecuta el servidor de desarrollo:

```bash
yarn run start:dev
```

## Base de datos

Este proyecto utiliza [PostgreSQL](https://www.postgresql.org/)
Utiliza [Docker](https://www.docker.com/) para crear un contenedor con la base de datos local.

### Docker

```bash
docker compose up -d
```

## Despliegue

Este proyecto esta configurado para desplegarse en [Render](https://render.com/), se integra con el repositorio de github y se despliega automaticamente cada vez que se hace un push a la rama `main`.

## Tecnologías

- [NestJS](https://nestjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Render](https://render.com/)

