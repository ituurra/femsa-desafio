const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokemonSchema = new Schema(
    {
      id: {
        type: Number,
      },
      name: {
        type: String,
      },
      url: {
        type: String,
      },
      status: {
        type: String,
      },
    },
    { collection: "pokemon" }
  );
  module.exports = mongoose.model("Pokemon", PokemonSchema) , PokemonSchema;