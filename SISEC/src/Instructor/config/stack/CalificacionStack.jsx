import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Calificar from '../../modules/calificar/adapters/screens/Calificar';
const Stack = createStackNavigator();

export default function QualifyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Calificar"
        component={Calificar}
        options={{title: 'Calificar',  headerTitleAlign: 'center',
      }}
      />
    </Stack.Navigator>
  );
}
