require('dotenv').config();

const PORT = 8529;
const { Database } = require('arangojs');

const { DB_HOST, DB_USER, DB_PASS } = process.env;

const db = new Database({
  url: `http://${DB_USER}:${DB_PASS}@${DB_HOST}:${PORT}`,
  databaseName: 'pokemon',
});

// db.useDatabase('pokemon');

// const collection = db.collection('teams');

// getTeam(username) {

// }
