import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import ConstantColors from "../constants/ConstantColors";

export class Banner extends Component {
  render() {
    return (
      <View style={styles.sloganButton}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/logo.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sloganButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: ConstantColors.tintColor,
  },
  tinyLogo: {
    height: 40,
    width: 200,
  },
});

export default Banner;
