// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ReservationScreen from "./screens/ReservationScreen";
import ThankYouScreen from "./screens/ThankYouScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Gallery", gestureEnabled: true }}
        />
        <Stack.Screen
          name="Reservation"
          component={ReservationScreen}
          options={{ title: "Reservation" }}
        />
        <Stack.Screen
          name="ThankYou"
          component={ThankYouScreen}
          options={{ title: "Thank You" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
