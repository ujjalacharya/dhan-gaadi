import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import SettingScreen from "../../screens/SettingScreen";
import LoginScreen from "../../screens/LoginScreen";

import { connect } from "react-redux";

const Stack = createStackNavigator();

const HomeStack = ({ isAuth }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      {isAuth ? (
        <Stack.Screen
          name="Settings"
          component={SettingScreen}
        />
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
      )}
    </Stack.Navigator>
  );
};

function mapStateToProps(state) {
  return {
    isAuth: state.User.auth.isAuth,
  };
}

export default connect(mapStateToProps)(HomeStack);
