import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import MessagesScreen from "../screens/MessagesScreen";
import FeedScreen from "../screens/FeedScreen";
import PrivateScreen from "./PrivateScreen";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings">
        {(props) => <PrivateScreen {...props} toRender={SettingScreen} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export const MessageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export const FeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feeds" component={FeedScreen} />
    </Stack.Navigator>
  );
};
