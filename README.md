<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo
1. Clonar repositorio.
2. Ejecutar:
  ```
  pnpm i
  ```
3. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```.
4. Cambiar las variables de entorno.

5. Levantar la base de datos
  ```
  docker-compose up -d
  ```
  o
  ```
  docker-compose -f docker-compose.dev.yaml up -d
  ```
6. Levantar proyecto: ```pnpm start:dev```
7. Ejecutar Seed
  ```
  http://localhost:4001/api/seed
  ```