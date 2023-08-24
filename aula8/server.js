const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

// /profiles/12345?
// campanha=googleads & 
// nome_campanha=seila

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente(a): <input type="text" name="nome">
    <button>Olá mundo</button> 
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // /profiles/3  => params
    // /profiles/?chave1=valor1&chave2=valor2 => query
    console.log(req.params);
    console.log(req.query); 
    res.send(req.query.nome);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(3333, () => {
    console.log('Acessar http://localhost:3333');
    console.log('Servidor executando na porta 3333');
});

