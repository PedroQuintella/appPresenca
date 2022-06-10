import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

export default function ProfessorLogin(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text>Login como Professor</Text>
            <TextInput
                placeholder="Endereço de e-mail"
            />
            <TextInput
                placeholder="Senha"
            />
            <Button title="Entrar" onPress={ () => navigation.navigate('TurmasProfessor') } />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})