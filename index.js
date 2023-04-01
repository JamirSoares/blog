var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/HTML/index.html')
});

app.get('/inscricao', function(req, res) {
    res.sendFile(__dirname + '/public/HTML/inscricao.html');
});




app.listen(8081,function(){
    console.log(" Servidor rodando na porta http://localhost:8081/")
})