const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente(a): <input type="text" name="nome">
    <button>Olá mundo</button> 
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
});

app.listen(3333, () => {
    console.log('Acessar http://localhost:3333');
    console.log('Servidor executando na porta 3333');
});

