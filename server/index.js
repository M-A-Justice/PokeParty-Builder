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
      res.status(200).send(results.data.results);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.post('/', (req, res) => {
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}!`));
