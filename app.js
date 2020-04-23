const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//config
//Templade engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
//body parser
app.engine("handlebars", handlebars({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')


// Rotas
app.get('/cad', function(req, res){
    res.render('Formulario')
})


app.post('/add', function(req, res){
    Post.create({
       titutos: req.body.tit,
       conteudo: req.body.cont
    })
})



//localhost:8080
app.listen(8080, function () {
    console.log("Servidor redando na url http://localhost:8080!!");
});