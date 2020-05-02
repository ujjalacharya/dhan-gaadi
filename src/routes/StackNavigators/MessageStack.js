import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MessagesScreen from "../../screens/MessagesScreen";
import { headerOptions } from "../../utils/common";

const Stack = createStackNavigator();

const MessageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Messages" component={MessagesScreen} options={headerOptions("Messages")}/>
    </Stack.Navigator>
  );
};

export default MessageStack;
