import React, { Component } from "react";
import { Text, View } from "react-native";
import { Appbar } from "react-native-paper";

export class SearchScreen extends Component {
  _goBack = () => {
    this.props.navigation.pop();
  };
  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Search" />
        </Appbar.Header>
        <Text> Search Screen </Text>
      </View>
    );
  }
}

export default SearchScreen;
