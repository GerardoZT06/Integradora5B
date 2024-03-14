import Login from "../../modules/auth/adapters/screens/Login";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

export default function LoginStack(){
    return (
        
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{title:'Login'}} />
        {/* Aquí puedes agregar otras pantallas de tu aplicación */}
      </Stack.Navigator>
   
        
    )
}
