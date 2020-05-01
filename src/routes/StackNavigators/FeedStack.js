import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FeedScreen from "../../screens/FeedScreen";
import LoginScreen from "../../screens/LoginScreen";

import { connect } from 'react-redux';

const Stack = createStackNavigator();

const FeedStack = ({isAuth}) => {
    
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

function mapStateToProps(state){
    return {
        isAuth: state.User.auth.isAuth
    }
}

export default connect(mapStateToProps)(FeedStack);
