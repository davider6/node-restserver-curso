const config = require('./config/config');
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/usuario', (req, res) => {

    res.json('GET usuario');
});

app.post('/usuario', (req, res) => {

    let body = req.body;

    if (!body.nombre) {
        res
            .status(400)
            .json({
                ok: false,
                message: 'El nombre es necesario'
            });
    } else {

        res.json({
            data: body
        });

    }

});

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', (req, res) => {

    res.json('DELETE usuario');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando en puerto ' + process.env.PORT);
});