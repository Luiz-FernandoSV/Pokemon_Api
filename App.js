import { StyleSheet, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Navbar from './src/components/Navbar';
import Card from './src/components/Card'; // Certifique-se de que o caminho esteja correto

export default function App() {
  const [pokemons, setPokemons] = useState([]); // Inicia com um array vazio

  useEffect(() => {
    async function buscarPokemons() {
      try {
        // Obtém os 16 primeiros pokemons
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=16');
        const data = await response.json();

        // Para cada Pokémon, faz uma segunda requisição para obter os outros dados
        const pokemonsComImagem = await Promise.all(data.results.map(async (pokemon) => {
          const pokemonDetalhes = await fetch(pokemon.url);
          const pokemonData = await pokemonDetalhes.json();

          // Retorna como o JSON abaixo
          return {
            nome: pokemon.name,
            urlImagem: pokemonData.sprites.front_default,
            tipo: pokemonData.types.map(typeInfo => typeInfo.type.name).join(', '),
            hp: pokemonData.stats.find(stat => stat.stat.name === 'hp').base_stat,
            ataque: pokemonData.stats.find(stat => stat.stat.name === 'attack').base_stat,
            defesa: pokemonData.stats.find(stat => stat.stat.name === 'defense').base_stat,
          };
        }));

        setPokemons(pokemonsComImagem);
        console.log(pokemonsComImagem);
      } catch (erro) {
        console.log("ERRO: " + erro);
      }
    }
    buscarPokemons();
  }, []);

  return (
    <View style={estilos.container}>
      <Navbar />
      <FlatList
        data={pokemons}
        renderItem={({ item }) => (
          <Card
            nome={item.nome}
            urlImagem={item.urlImagem}
            tipo={item.tipo}
            hp={item.hp}
            ataque={item.ataque}
            defesa={item.defesa}
          />
        )}
        keyExtractor={(item) => item.nome}
        numColumns={2}
        contentContainerStyle={estilos.listaContainer}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  listaContainer: {
    padding: 10,
    width: 'auto',
  },
});