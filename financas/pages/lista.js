import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Lista = () => {
  const [itensArmazenados, setItensArmazenados] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const recuperarItens = async () => {
        try {
          const chaves = await AsyncStorage.getAllKeys();
          const itens = await AsyncStorage.multiGet(chaves);
          const itensArmazenados = itens.map((item) => JSON.parse(item[1]));
          setItensArmazenados(itensArmazenados);
        } catch (error) {
          alert(error);
        }
      };
      recuperarItens();
    }, [])
  );

  const excluirTodosItens = async () => {
    try {
      await AsyncStorage.clear();
      setItensArmazenados([]);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={{ padding: 50 }}>
      <FlatList
        data={itensArmazenados}
        renderItem={({ item }) => (
          <View>
            <Text>Manutenção: {item.texto}</Text>
            <Text>Valor: R${item.valor}</Text>
            <Text>Data: {item.data} {'\n'}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Excluir todos os itens da lista" onPress={excluirTodosItens} />
    </View>
  );
};

export default Lista;