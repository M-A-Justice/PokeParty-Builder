require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/teams', { useNewUrlParser: true });
const { connection, Schema } = mongoose;

const moveSchema = new Schema({
  name: String,
});

const statSchema = new Schema({
  base_stat: Number,
  effort: Number,
  stat: {
    name: String,
  },
});

const pokemonSchema = new Schema({
  id: Number,
  name: String,
  moves: [moveSchema],
  stats: [statSchema],
  sprites: {
    front_default: String,
  },
});

// const teamSchema = new Schema({
//   team: [pokemonSchema],
// });

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

const disconnectConnection = () => {
  connection.close();
};

module.exports = {
  Pokemon,
  disconnectConnection,
};
// const PORT = 8529;
// const { Database } = require('arangojs');

// const { DB_HOST, DB_USER, DB_PASS } = process.env;

// const db = new Database({
//   url: `http://${DB_USER}:${DB_PASS}@${DB_HOST}:${PORT}`,
//   databaseName: 'pokemon',
// });

// // db.useDatabase('pokemon');

// const collection = db.collection('teams');

// const addPokemon = (pokemon, callback) => {
//   collection.document()
//     .then(
//       (doc) => callback(null, doc),
//       (err) => console.err('Failed to insert Pokemon object: ', err.message),
//     );
// };

// const getTeam = (id, callback) => {
//   collection.document()
//     .then(
//       (doc) => callback(null, doc),
//       (err) => console.error('Failed to fetch document: ', err.message),
//     );
// };

// module.exports = {
//   addPokemon,
//   getTeam,
// };
