import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Colors } from "react-native-paper";
import ConstantColors from "../constants/ConstantColors";

export class Banner extends Component {
  render() {
    return (
      <Button
        mode="contained"
        color={ConstantColors.bannerColor}
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
