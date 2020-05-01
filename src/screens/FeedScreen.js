import React, { Component } from "react";
import { Text, View, Button, AsyncStorage } from "react-native";

export default class FeedScreen extends Component {
  state = {
    isAuth: false,
  };

  async componentDidMount() {
    try {
      let token = await AsyncStorage.getItem("token");
      if (token) {
        this.setState({ isAuth: true });
      }
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState){
    console.log("prevState", prevState)
    console.log("this.state", this.state)
  }

  handleLogin = async () => {
    try {
      await AsyncStorage.setItem("token", "xa hai");
      this.setState({
        isAuth: true
      });
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

  handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      this.setState({
        isAuth: false,
      });
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

  render() {
    return (
      <View>
        <Text> Feed Screen </Text>
        {this.state.isAuth ? (
          <Button title="Logout" onPress={this.handleLogout} />
        ) : (
          <Button title="Login" onPress={this.handleLogin} />
        )}
      </View>
    );
  }
}
