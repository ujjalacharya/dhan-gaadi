import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";

export class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text> Home Screen </Text>
        <Text> Home Screen </Text>
        <Text> Home Screen </Text>
        <Text> Home Screen </Text>
        <Text> Home Screen </Text>
        <Text> Home Screen </Text>
        <Text> Home Screen </Text>
        <Text> Home Screen </Text>
        <Text> Home Screen </Text>
        <Text> Home Screen </Text>
        <Button
          title="Go to Settings"
          onPress={() => {
            this.props.isAuth
              ? this.props.navigation.navigate("Settings")
              : this.props.navigation.navigate("Login");
          }}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.User.auth.isAuth,
  };
}

export default connect(mapStateToProps)(HomeScreen);
