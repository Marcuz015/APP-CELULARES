import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const theme = {
  colors: {
    primary: '#04534d',
  }
};

export default function Home() {
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');

  async function PostDados(url = "", data = {}) {
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      return response.json();
    } catch (error) {
      console.error('Erro ao cadastrar celular:', error);
    }
  }

  const handleSubmit = () => {
    PostDados("http://localhost:3000/celulares", { nome, marca })
      .then((newCelular) => {
        console.log('Celular cadastrado com sucesso:', newCelular);
        setNome('');
        setMarca('');
      })
      .catch(error => console.error('Erro ao cadastrar celular:', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastrar Celular 📱</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder='Nome do celular'
      />
      <TextInput
        style={styles.input}
        value={marca}
        onChangeText={setMarca}
        placeholder='Marca do celular'
      />
      <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
        <Text style={styles.botaoTexto}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#03363a',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  botao: {
    width: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
