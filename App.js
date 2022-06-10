import React from "react";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Usuarios from "./src/pages/Usuarios";
import AlunoLogin from "./src/pages/AlunoLogin";
import ProfessorLogin from "./src/pages/ProfessorLogin";
import TurmasAluno from "./src/pages/TurmasAluno";
import TurmasProfessor from "./src/pages/TurmasProfessor";
import AlunosTurma from "./src/pages/AlunosTurma";
import DisciplinasTurma from "./src/pages/DisciplinasTurma";

const stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>

        <stack.Screen name="Usuarios" component={Usuarios} />
        <stack.Screen name="AlunoLogin" component={AlunoLogin} />
        <stack.Screen name="ProfessorLogin" component={ProfessorLogin} />
        <stack.Screen name="TurmasAluno" component={TurmasAluno} />
        <stack.Screen name="TurmasProfessor" component={TurmasProfessor} />
        <stack.Screen name="AlunosTurma" component={AlunosTurma} />
        <stack.Screen name="DisciplinasTurma" component={DisciplinasTurma} />
      </stack.Navigator>
    </NavigationContainer>
  )
}