import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../../screens/MessagesScreen";

const Stack = createStackNavigator();

const MessageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
};

export default MessageStack;
