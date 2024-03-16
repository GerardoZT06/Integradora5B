 //HECHOOOOO


import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import BuscarStack from "../stack/BuscarStack";
import CorazonStack from "../stack/CorazonStack";
import InicioStack from "../stack/InicioStack";
import InscritoStack from "../stack/InscritoStack";
import MeGustaStack from "../stack/MeGustaStack";
import PerfilStack from "../stack/PerfilStack";


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const { iconName, iconType } = getIconName(route.name, focused);
            return (
              <Icon name={iconName} type={iconType} size={size} color={color} />
            );
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
         <Tab.Screen
          name="InicioStack"
          component={InicioStack}
          options={{ title: "Inicio" }}
        />
         <Tab.Screen
          name="BuscarStack"
          component={BuscarStack}
          options={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="InscritoStack"
          component={InscritoStack}
          options={{ title: "Inscrito" }}
        />
        <Tab.Screen
          name="MeGustaStack"
          component={MeGustaStack}
          options={{ title: "Me gusta" }}
        />
       
       
        <Tab.Screen
          name="CorazonStack"
          component={CorazonStack}
          options={{ title: "Corazon" }}
        />

        <Tab.Screen
          name="PerfilStack"
          component={PerfilStack}
          options={{ title: "Perfil" }}
        />





        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const getIconName = (routeName, focused) => {
  let iconName = "";
  let iconType = "material-community";
  switch (routeName) {
    case "BuscarStack":
      iconName = focused ? "magnify" : "magnify";
      break;
    case "CorazonStack":
      iconName = focused ? "heart-outline" : "heart-outline";
      break;
    case "InicioStack":
      iconName = focused ? "home" : "home-outline";
      break;
    case "InscritoStack":
      iconName = focused ? "file-check-outline" : "file-check-outline";
      break;
    case "MeGustaStack":
      iconName = focused ? "thumb-up-outline" : "thumb-up-outline";
      break;
    case "PerfilStack":
      iconName = focused ? "account-outline" : "account-outline";
      break;




      
  }
  return { iconName, iconType };
};
