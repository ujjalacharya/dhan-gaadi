import React, { Component } from "react";
import { Text, View, Button } from "react-native";

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
        onPress={() => this.props.navigation.navigate('Settings')}
      />
      </View>
    );
  }
}

export default HomeScreen;
