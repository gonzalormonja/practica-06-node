const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parcial/')

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'hbs');
app.get('/', (req, resp) => {
    resp.render('home', {
        nombre: 'Gonzalo Monja',
        anio: new Date().getFullYear()
    });
})
app.get('/about', (req, resp) => {
    resp.render('about', {
        anio: new Date().getFullYear()
    });
})
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});