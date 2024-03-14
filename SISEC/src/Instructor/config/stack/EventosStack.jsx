import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import  Eventos from './../../modules/eventos/adapters/screens/Eventos'


const Stack = createStackNavigator();
export default function BuscarStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen 
        name = 'Eventos' 
        component={Eventos} 
        options={{
            title: 'Eventos',
            headerTitleAlign: 'center',
            }}/>
   </Stack.Navigator>
  )
}