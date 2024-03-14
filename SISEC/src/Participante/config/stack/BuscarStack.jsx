import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Buscar from "../../modules/buscar/adapters/screens/Buscar"


const Stack = createStackNavigator();
export default function BuscarStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen name = 'Buscar' component={Buscar} options={{title: 'Buscar'}}/>
   </Stack.Navigator>
  )
}