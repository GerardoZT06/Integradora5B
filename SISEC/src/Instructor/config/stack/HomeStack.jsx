import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import  Home from './../../modules/home/adapters/screens/Home'


const Stack = createStackNavigator();
export default function BuscarStack() {
  return (
    <Stack.Navigator>
    <Stack.Screen 
        name = 'Home' 
        component={Home} 
        options={{
            title: 'Inicio',
            headerTitleAlign: 'center',
            }}/>
   </Stack.Navigator>
  )
}