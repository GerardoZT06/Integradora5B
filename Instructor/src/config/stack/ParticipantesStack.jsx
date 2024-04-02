import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import  Participantes from '../../modules/participantes/adapters/screens/Participantes'


const Stack = createStackNavigator();
export default function BuscarStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen 
        name = 'Participantes' 
        component={Participantes} 
        options={{
            title: 'Home',
            headerTitleAlign: 'center',
            }}/>
   </Stack.Navigator>
  )
}