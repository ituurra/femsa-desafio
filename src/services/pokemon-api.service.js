var axios = require("axios");

function getPokemons() {
    let pokemonsList = []
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=200')
        .then((resp) => {
            resp.data?.results.map((p) => {
                let pokemon = {
                    id: parseInt(p?.url.split('/').slice(-2)[0], 10) || null,
                    name: p?.name || '',
                    url: p?.url || '',
                    status: null
                }
                pokemonsList.push(
                    pokemon
                )
            })
            
            // console.log(pokemonsList);
            return pokemonsList;
        }).catch((e) => {
            console.log(e);
        })
    
    // Set pokemons!
    return pokemons;
}

exports.getPokemons = getPokemons;