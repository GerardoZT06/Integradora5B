//checar


import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "./../../modules/inicio/adapters/screens/Inicio"


const Stack = createStackNavigator();
export default function InicioStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name = 'Inicio' component={Inicio} options={{title: 'Inicio'}}/>
   </Stack.Navigator>
  )
}