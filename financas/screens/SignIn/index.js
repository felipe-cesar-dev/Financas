import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import styles from "../../styles/styles";

const SignIn = () => {
  const navigation = useNavigation();

  async function handleSignIn() {
    navigation.navigate('Inicio');
  }

  return (
    <ImageBackground
      style={styles.signinView}
      source={{ uri: 'url_da_imagem' }} // adicione a URL da imagem aqui
    >
      <View>
        <Text style = {styles.signinText}>Hora de entrar na sua conta: </Text>
        <Button title="Entrar com Google" icon="social-google" onPress={handleSignIn} />
      </View>
    </ImageBackground>
  );
};

export default SignIn;