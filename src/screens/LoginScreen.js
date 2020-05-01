import React, { Component } from "react";
import { Text, View, StyleSheet, Button, AsyncStorage } from "react-native";
// import { Button } from 'react-native-paper'

export class LoginScreen extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({ title: "Login" });
  }

  handleLogin = async () => {
    this.props.loginLogout("fdf");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Login Screen </Text>
        <Button title="Login" onPress={this.handleLogin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

export default LoginScreen;
