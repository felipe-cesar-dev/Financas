import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import styles from "../../styles/styles";
import * as AuthSession from 'expo-auth-session';

const SignIn = () => {
  const navigation = useNavigation();

  async function handleSignIn() {
    const CLIENT_ID ='351770148352-ap99k6mvur2b1ncp1sjf6q8jt3tka5ab.apps.googleusercontent.com';
    const REDIRECT_URI = 'https://auth.expo.io/@felipeppt-2/financas';
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('inicio email');


    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
    const response = await AuthSession.startAsync({authUrl})
    console.log(response)

    navigation.navigate('Inicio/index');
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