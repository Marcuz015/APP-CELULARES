import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Routes() {
  return (
    <View style={styles.container}>
      <View style={styles.usuario}>
        <Image
          style={styles.logo}
          source={require('../img/imagens-de-pessoa-apontando-png-1.png')}
        />
        <Text style={styles.texto}>jpaones viado</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 100,
    height: 100,
    marginRight: 10, // Adicionando margem à direita para separar a imagem do texto
  },
  usuario: {
    flexDirection: 'row', // Organiza os elementos horizontalmente
    alignItems: 'center', // Alinha os elementos verticalmente
  },
  texto: {
    fontSize: 20, // Tamanho do texto
  },
});
