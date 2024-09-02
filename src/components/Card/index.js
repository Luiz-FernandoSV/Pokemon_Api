import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Card({ nome, urlImagem, tipo, hp, ataque, defesa }){
  return (
    <View style={styles.card}>
      <Image source={{ uri: urlImagem }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{nome.toUpperCase()}</Text>
        <Text style={styles.type}>Type: {tipo.toUpperCase()}</Text>
        <Text style={styles.stats}>HP: {hp}</Text>
        <Text style={styles.stats}>Attack: {ataque}</Text>
        <Text style={styles.stats}>Defense: {defesa}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    margin: 4,
    padding: 4,
    alignItems: 'center',
    backgroundColor: '#FA4B49',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#FA4B49',
    backgroundColor: '#FFF'
  },
  infoContainer: {
    width: '100%'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    marginBottom: 5,
    color: '#FFF'
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
    marginLeft: 5,
  },
  stats: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 3,
    marginLeft: 5,
  },
});

export default Card;