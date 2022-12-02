# LAB - Class 03

## Project:Server basic-api-server

### Author: Elias Staehle

### Problem Domain

Create a web server using CI and CD and get used to the general process of building and deploying servers, and using shcema and modules

### Links and Resources

- [ci/cd](https://github.com/EDStaehle/basic-express-server/actions) (GitHub Actions)
- [prod development](postgres://eliasstaehle_user:RXgpZrgEXdvXlVg4FgUeRqZD5NaU2bzL@dpg-ce42fk6n6mpku7k0j3rg-a.ohio-postgres.render.com/eliasstaehle)

### Setup

#### `.env` requirements (where applicable)

see `.env.sample`


- `PORT` - Port Number


#### How to initialize/run your application (where applicable)

- nodemon

#### Features / Routes

- Feature One: deploy to dev
- GET : `` - specific route to hit
- GET : `/bad` -  specific route to hit
- Feature One: deploy to prod
- GET : `/hello` - specific route to hit
- GET : `/person` - specific route to hit

#### Tests

- npm test
-
- handles root path
- handles invalid requests
- handles errors
- handles crud operation for both /games and /cars

#### UML

![UML](./src/assets/class-03-uml.png)
