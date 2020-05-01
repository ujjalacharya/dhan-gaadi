import React, { Component } from "react";
import { Text, View, Button, AsyncStorage } from "react-native";

export default class FeedScreen extends Component {
 
  handleLogout = async () => {
    this.props.loginLogout();
  };

  render() {
    return (
      <View>
        <Text> Feed Screen </Text>
        <Button title="Logout" onPress={this.handleLogout} />
      </View>
    );
  }
}
