import React, { useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [texto, setTexto] = useState('');

  const armazenarTexto = async () => {
    try {
      const chave = `texto-${Date.now()}`;
      await AsyncStorage.setItem(chave, texto);
      setTexto('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 50 }}>
      <TextInput
        value={texto}
        onChangeText={(text) => setTexto(text)}
        placeholder="Digite um texto"
      />
      <Button title="Armazenar" onPress={armazenarTexto} />
    </View>
  );
};

export default App;