import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import HomeStack from './../stack/HomeStack'
import CalificacionStack from './../stack/CalificacionStack'
import ParticipantesStack from './../stack/ParticipantesStack'
import EventosStack from './../stack/EventosStack'
import PerfilStack from './../stack/PerfilStack'


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
          name="HomeStack"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Tab.Screen
          name="ParticipantesStack"
          component={ParticipantesStack}
          options={{ title: "Participantes" }}
        />
        <Tab.Screen
          name="EventosStack"
          component={EventosStack}
          options={{ title: "Eventos" }}
        />
        <Tab.Screen
          name="CalificacionStack"
          component={CalificacionStack}
          options={{ title: "Calificar" }}
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
    case "HomeStack":
      iconName = focused ? "home" : "home";
      break;
    case "ParticipantesStack":
      iconName = focused ? "account-multiple" : "account-multiple";
      break;
    case "EventosStack":
      iconName = focused ? "calendar-multiple" : "calendar-multiple";
      break;
    case "CalificacionStack":
      iconName = focused ? "file-check-outline" : "file-check-outline";
      break;
  
    case "PerfilStack":
      iconName = focused ? "account-outline" : "account-outline";
      break;
  }
  return { iconName, iconType };
};
