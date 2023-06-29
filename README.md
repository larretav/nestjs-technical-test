<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo
1. Clonar repositorio
2. Ejecutar:
  ```
  pnpm install
  ```
3. Tener Nest CLI instalado:
  ```
  npm i -g @nestjs/cli
  ```
4. Cambiar el origen del repositorio:
  ```
  git remote set-url origin <URL_del_nuevo_repositorio>
  ```
5. Subir al nuevo repositorio:
  ```
  git add .
  git commit -m "Primer commit"
  git branch -M main
  git push -u origin main
  ```