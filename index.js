const express = require('express');
const app = express();
const porta = 3000;
var Route = require('./routes/Route');
//handlebars
const hand = require('express-handlebars');
app.set('view engine', 'html');
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");

app.use(express.urlencoded({extended: true}));

app.use("/", Route);

app.listen(porta, () => {
  console.log("Exemplo de uso de rotas.");
})