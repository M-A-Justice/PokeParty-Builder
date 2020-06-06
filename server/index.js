const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

const PORT = 3000;

app.use(express.static('public/'));

app.use(bodyParser.json());

// app.get('/', (req, res) => {
// });

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}!`));