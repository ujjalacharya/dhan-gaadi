import React, { Component } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const isLoggedIn = false;

export class RootRoute extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Settings" component={SettingScreen} />
            </>
          ) : (
            <Stack.Screen name="SignIn" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default RootRoute;
