import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import HomeHeader from "../../components/HomeHeader";
import ConstantColors from "../../constants/ConstantColors";

export class HomeScreen extends Component {
  render() {
    return (
      <>
        <HomeHeader headerTitle="DHAN-GAADI" />
        <View style={styles.container}>
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
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ConstantColors.backgroundColor,
  },
});


function mapStateToProps(state) {
  return {
    isAuth: state.User.auth.isAuth,
  };
}

export default connect(mapStateToProps)(HomeScreen);
