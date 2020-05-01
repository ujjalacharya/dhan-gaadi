import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FeedScreen from "../../screens/FeedScreen";
import LoginScreen from "../../screens/LoginScreen";

const Stack = createStackNavigator();

const FeedStack = () => {
    const isAuth = false;
  return (
    <Stack.Navigator>
      {isAuth ? (
        <Stack.Screen name="Feeds" component={FeedScreen} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default FeedStack;
