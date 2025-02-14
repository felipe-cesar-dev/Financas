    import React, { useState } from 'react';
    import { View, Text, Button, FlatList } from 'react-native';
    import AsyncStorage from '@react-native-async-storage/async-storage';

    const Lista = () => {
    const [textosArmazenados, setTextosArmazenados] = useState([]);
    const recuperarTextos = async () => {
        try {
        const chaves = await AsyncStorage.getAllKeys();
        const textos = await AsyncStorage.multiGet(chaves);
        const textosArmazenados = textos.map((texto) => texto[1]);
        setTextosArmazenados(textosArmazenados);
        } catch (error) {
        alert(error);
        }
    };

    const excluirTodosItens = async () => {
        try {
        await AsyncStorage.clear();
        setTextosArmazenados([]);
        } catch (error) {
        alert(error);
        }
    };

    return (
        <View style={{ padding: 50 }}>
        <Button title="Recuperar" onPress={recuperarTextos} />
        <FlatList
            data={textosArmazenados}
            renderItem={({ item }) => (
            <Text style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>{item}</Text>
            )}
            keyExtractor={(item, index) => index.toString()}
        />
        <Button title="Excluir todos os itens" onPress={excluirTodosItens} />
        </View>
    );
    };

    export default Lista;