import User from "../models/User";
import Pokedex from "../models/Pokedex";
import Pokemon from "../models/Pokemon";

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newProduct = new User({
      username,
      email,
      password,
    });

    const userSaved = await newProduct.save();

    res.status(201).json(userSaved);
    console.log(userSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const createPokedex = async (req, res) => {
  Pokemon.find({}, function (err, pokemonList) {
    if (err) {
      console.error(err);
    } else {
      const pokedex = [];

    
      pokemonList.forEach(function (pokemon) {
        pokedex.push({
          id: pokemon.id,
          name: pokemon.name,
          url: pokemon.url,
          status: pokemon.status,
        });
      });

      const newPokedex = new Pokedex({
        user: "63ed43b35ab676ef2e5fda2b",
        numPokedex: "10",
        pokemones: pokedex,
      });

    
      newPokedex.save(function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log(newPokedex);
        }
      });
    }
  });
  return res.status(200);
};



