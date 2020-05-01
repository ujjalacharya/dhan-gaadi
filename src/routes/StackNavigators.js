import React, { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import MessagesScreen from "../screens/MessagesScreen";
import FeedScreen from "../screens/FeedScreen";
import PrivateScreen from "./PrivateScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

let globalAuth = false;

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
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
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    fetchToken();
  }, []);

  const fetchToken = async () => {
    try {
      let token = await AsyncStorage.getItem("token");
      if (token) {
        setIsAuth(true);
        globalAuth = true;
      }
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

  const loginLogout = (token) => {
    if (token) {
      globalAuth = true;
      setIsAuth(true);
    } else {
      globalAuth = false;
      setIsAuth(false);
    }
  };

  return (
    <Stack.Navigator>
      {isAuth ? (
        <Stack.Screen name="Feeds">
          {(props) => (
            <FeedScreen {...props} loginLogout={loginLogout} isAuth={isAuth} />
          )}
        </Stack.Screen>
      ) : (
        <Stack.Screen name="Login">
          {(props) => (
            <LoginScreen {...props} loginLogout={loginLogout} isAuth={isAuth} />
          )}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};
