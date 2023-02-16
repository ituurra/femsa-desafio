import User from "../models/User";
import Pokedex from "../models/Pokedex";
import Pokemon from "../models/Pokemon";

export const capturePokemon = async (req, res) => {
  try {
    const userId = req.params.userId;
    const pokemonId = req.params.pokemonId;
    const pokemonIdNumber = parseInt(pokemonId);

    const user = await User.findById(userId); //valida si existe el id
    if (!user) {
      return res.status(404).json({"status":"error, no existe usuario !"});
    }
    const pokemon = await Pokemon.findOne({id : pokemonIdNumber});
    if (!pokemon) {
      return res.status(404).json({"status":"error, no existe pokemon!"});
    }


    await Pokedex.updateOne(
      {
        user: userId,
        pokemones: {
          $elemMatch: {
            id: pokemonIdNumber,
          },
        },
      },
      {
        $set: {
          "pokemones.$.status": "captured",
        },
      }
    );
    return res.status(200).json({ status: "Captured !" });
  } catch (err) {
    return res.status(404).json(err);
  }
};

export const seePokemon = async (req, res) => {
  try {
    const userId = req.params.userId;
    const pokemonId = req.params.pokemonId;
    const pokemonIdNumber = parseInt(pokemonId);

    await Pokedex.updateOne(
      {
        user: userId,
        pokemones: {
          $elemMatch: {
            id: pokemonIdNumber,
          },
        },
      },
      {
        $set: {
          "pokemones.$.status": "saw",
        },
      }
    );
    return res.status(200).json({ status: "Saw!" });
  } catch (err) {
    console.log(error);
    return res.status(404).json(error);
  }
};

export const getPokedexbyId = async (req, res) => {
  const userId = req.params.userId;

  Pokedex.find({ user: userId }).exec(function (err, pokedexList) {
    if (err) {
      return res.status(500).json(err);
    } else {
      return res.status(200).json(pokedexList);
    }
  });
};
