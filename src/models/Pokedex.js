const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PokedexSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    numPokedex: {
      type: Number,
    },
    pokemones: [],
  },
  { collection: "pokedex" }
);

module.exports = mongoose.model("Pokedex", PokedexSchema);
