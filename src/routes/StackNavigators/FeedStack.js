import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FeedScreen from "../../screens/FeedScreen";
import LoginScreen from "../../screens/LoginScreen";

import { connect } from 'react-redux';
import { headerOptions } from "../../utils/common";

const Stack = createStackNavigator();

const FeedStack = ({isAuth}) => {
  return (
    <Stack.Navigator>
      {isAuth ? (
        <Stack.Screen name="Feeds" component={FeedScreen} options={headerOptions("Feeds")}/>
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

export default connect(mapStateToProps)(FeedStack);
