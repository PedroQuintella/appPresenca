import React from "react";
import { StyleSheet, TextInput, Text, View, In } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";

import { Input } from './styles';

export default function AlunoLogin(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text>Login como Aluno</Text>
            <TextInput
                placeholder="Endereço de e-mail"
            />
            <TextInput
                placeholder="Senha"
            />
            <Button title="Entrar" onPress={ () => navigation.navigate('TurmasAluno') } />
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