import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Corazon from '../../modules/corazon/adapters/screens/Corazon';
import DetallesEvento from '../../modules/corazon/adapters/screens/DetallesEvento';
import Participantes from '../../modules/corazon/adapters/screens/Participantes'; // Asegúrate de importar el componente correcto
import PantallaEjemplo from '../../modules/corazon/adapters/screens/PantallaEjemplo';
const Stack = createStackNavigator();

export default function CorazonStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Corazon'
        component={Corazon}
        options={{
          title: 'Me gusta',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name='DetallesEvento'
        component={DetallesEvento}
        options={{
          title: 'Detalles del Evento',
          headerTitleAlign: 'center',
        }}
      />
      
      <Stack.Screen
        name='Participantes'
        component={Participantes} // Asegúrate de que estás utilizando el componente correcto
        options={{
          title: 'Detalles de Participantes',
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen
        name='PantallaEjemplo'
        component={PantallaEjemplo}
        options={{
          title: 'Pantalla de ejemplo',
          headerTitleAlign: 'center',
        }}
      />
  


    </Stack.Navigator>
  );
}
