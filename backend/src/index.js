const express = require("express"); // importa o express pra variavel (como o import do React)
const routes = require("./routes"); // a importação das rotas, parametro sendo a localização do file
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes); // faz o app utilizar as rotas do file routes.js

app.listen(3333); // É a porta de acesso do aplicativo ao browser - localhost
