import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Button } from "react-native";

export default function TurmasProfessor(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text>Turmas do Professor:</Text>
            <Button title="Ver alunos" onPress={ () => navigation.navigate('AlunosTurma') } />
            <Text>Turma 2019.1</Text>
            <Button title="Ver alunos" onPress={ () => navigation.navigate('AlunosTurma') } />
            <Text>Turma 2019.2</Text>
            <Button title="Ver alunos" onPress={ () => navigation.navigate('AlunosTurma') } />
            <Text>Turma 2020.1</Text>
            <Button title="Ver alunos" onPress={ () => navigation.navigate('AlunosTurma') } />
            <Text>Turma 2020.2</Text>
            <Button title="Ver alunos" onPress={ () => navigation.navigate('AlunosTurma') } />

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
        width: '1234px',
    }
})