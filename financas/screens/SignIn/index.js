import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

const SignIn = () => {
    const navigation = useNavigation()

    async function handleSignIn() {
        navigation.navigate('Inicio')
    }

    return (
        <View>

            <Button
                title="Entrar com Google"
                icon = "social-google"
                onPress={handleSignIn}
            />

        </View>
    )

}

export default SignIn