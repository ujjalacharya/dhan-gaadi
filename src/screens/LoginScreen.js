import React, { Component } from "react";
import { Text, View, StyleSheet, Button, AsyncStorage } from "react-native";
// import { Button } from 'react-native-paper'

export class LoginScreen extends Component {

  state = {

  }

  componentDidMount() {
    this.props.navigation.setOptions({ title: "Login" });
  }

  handleLogin = async () => {
    try {
      await AsyncStorage.setItem("token", "xa hai");
      this.setState({})
    } catch (error) {
      // Error saving data
      console.log(error);
    }
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
