const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const db = require('../database/index.js');

const app = express();

const PORT = 3000;

app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.use(bodyParser.json());

app.get('/names', (req, res) => {
  axios.get('http://pokeapi.co/api/v2/pokemon/?limit=963')
    .then((results) => {
      const pokemon = results.data.results;
      res.status(200).send(pokemon);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/pokemon', (req, res) => {
  db.Pokemon.find({})
    .then((results) => {
      res.status(200).send(results);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.post('/store', (req, res) => {
  // const doc = new db.Pokemon(req.body);
  db.Pokemon.create(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}!`));
