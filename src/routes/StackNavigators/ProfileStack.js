import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../screens/ProfileScreen";
import LoginScreen from "../../screens/LoginScreen";

import { connect } from 'react-redux';
import { headerOptions } from "../../utils/common";

const Stack = createStackNavigator();

const ProfileStack = ({isAuth}) => {
  return (
    <Stack.Navigator>
      {isAuth ? (
        <Stack.Screen name="Profile" component={ProfileScreen} options={headerOptions("Profile")}/>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} options={headerOptions("Login")}/>
      )}
    </Stack.Navigator>
  );
};

function mapStateToProps(state){
    return {
        isAuth: state.User.auth.isAuth
    }
}

export default connect(mapStateToProps)(ProfileStack);
