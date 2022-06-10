import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Button } from "react-native";

export default function AlunosTurma(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text>Alunos da Turma:</Text>
            <Button title="Ver Disciplinas" onPress={ () => navigation.navigate('ProfessorLogin') } />
            <Text>Aluno 1</Text>
            <Button title="Ver Disciplinas" onPress={ () => navigation.navigate('ProfessorLogin') } />
            <Text>Aluno 2</Text>
            <Button title="Ver Disciplinas" onPress={ () => navigation.navigate('ProfessorLogin') } />
            <Text>Aluno 3</Text>
            <Button title="Ver Disciplinas" onPress={ () => navigation.navigate('ProfessorLogin') } />
            <Text>Aluno 4</Text>
            <Button title="Ver Disciplinas" onPress={ () => navigation.navigate('ProfessorLogin') } />
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