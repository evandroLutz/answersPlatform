const express = require('express');
const app = express();

app.set('view engine', 'ejs');
// render html


app.get('/', (req, res) => {
    const name = 'Evandro Lutz';
    const language = 'Javascript';
    res.render('index', {
        name,
        language,
    });
});

app.listen(3000, () => {
    console.log('app rodando!');
});