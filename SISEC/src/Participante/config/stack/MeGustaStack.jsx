//hecho

import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import MeGusta from "../../modules/megusta/adapters/screens/MeGusta"


const Stack = createStackNavigator();
export default function MeGustaStack() {
  return (
    <Stack.Navigator>

 
        


    <Stack.Screen 
    name = 'Me Gusta' 
    component={MeGusta} 
    options={{title: 'Me Gusta',
    headerTitleAlign: 'center',}}
    
    
  



    />
   </Stack.Navigator>
  )
}