import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export class Banner extends Component {
  render() {
    return (
      <Button
        mode="contained"
        color="#2978a0"
        style={styles.sloganButton}
        onPress={() => console.log("Pressed")}
      >
        <Text style={{ color: "white", fontSize: 20 }}>Get Seat Go!</Text>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  sloganButton: {
    width: "105%",
    // height: "40%",
    // borderRadius: 40,
    borderWidth: 1,
    // borderColor: ConstantColors.tintColor,
    elevation: 20,
  },
});

export default Banner;
