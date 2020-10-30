<h1 align="center">
    <img src="src/images/logo.svg">
    Happy
</h1>

## 💻 Projeto
Projeto desenvolvido através da Next Level Week da RocketSeat. O Happy é um sistema que conecta pessoas a orfanatos próximos, para realização de visitas. 

## 🚀 Tecnologias

Esse projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [SQLite](https://www.sqlite.org/index.html)
- [TypeORM](https://typeorm.io/)
- [React.Js](https://pt-br.reactjs.org/)
- [Leaflet](https://leafletjs.com/)

## ⌨ Executando o Projeto

### Back-end

```bash
# Acesse a pasta backend
$ cd backend

# Pasta onde a aplicação salvará as imagens
-> Crie uma pasta com o nome de 'uploads'

# Instale as dependências
$ yarn install

# Execute as migrations do banco de dados
$ yarn typeorm migration:run

# Execute o projeto
$ yarn dev
```

### Front-end
```bash
# Instalando as dependências
$ yarn install

# Adicionando as variáveis de ambiente
-> Crie um arquivo com o nome '.env'
# Crie uma conta gratuita no MapBox para pegar seu token
-> https://account.mapbox.com
# Salve o token no arquivo .env
-> REACT_APP_MAPBOX_TOKEN=TOKEN

# Execute o projeto
$ yarn start
```