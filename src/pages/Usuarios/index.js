import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Button } from "react-native";

export default function Usuarios(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Button title="Entrar como Aluno" onPress={ () => navigation.navigate('AlunoLogin') } />
            <Button title="Entrar como Professor" onPress={ () => navigation.navigate('ProfessorLogin') } />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logotipoImage:{
        width: '400px',
    }
})