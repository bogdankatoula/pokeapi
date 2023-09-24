async function getPokemons(){
    const res = await fetch ("https://pokeapi.co/api/v2/pokemon");
    const resPokemons = await res.json();
    getDetailPokemons(resPokemons.results);
}
async function getDetailPokemons(pokemons){
    const pokemonsPromises = pokemons.map(pokemon => fetch(pokemon.url).then(res => res.json()));
    const detailPokemons = await Promise.all(pokemonsPromises);
    console.log(detailPokemons);
}
getPokemons();