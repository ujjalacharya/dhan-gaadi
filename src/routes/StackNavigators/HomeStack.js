import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import SettingScreen from "../../screens/SettingScreen";
import LoginScreen from "../../screens/LoginScreen";

import { connect } from "react-redux";
import { headerOptions } from "../../utils/common";

const Stack = createStackNavigator();

const HomeStack = ({ isAuth }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={headerOptions()}
      />
      {isAuth ? (
        <Stack.Screen
          name="Settings"
          component={SettingScreen}
          options={headerOptions("Settings")}
          />
          ) : (
            <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={headerOptions("Login")}
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
