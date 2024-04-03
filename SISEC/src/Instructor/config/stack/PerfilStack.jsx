import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Perfil from '../../modules/perfil/adapters/screens/Perfil';
const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Perfil"
        component={Perfil}
        options={{title: 'Perfil' ,
                   headerTitleAlign: 'center',
      }}
      />
    </Stack.Navigator>
  );
}
