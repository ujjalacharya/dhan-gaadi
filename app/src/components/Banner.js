import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Colors } from "react-native-paper";
import ConstantColors from "../constants/ConstantColors";

export class Banner extends Component {
  render() {
    return (
      // <View style={{flex: 1, backgroundColor: "green", width: "100%"}}>
        <Button
          mode="contained"
          color={ConstantColors.tintColor}
          style={styles.sloganButton}
          onPress={() => console.log("Pressed")}
        >
          <Text style={{ color: "white", fontSize: 20 }}>DHANGAADI</Text>
        </Button>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  sloganButton: {
    // width: "150%",
    // height: "40%",
    // borderRadius: 40,
    borderWidth: 1,
    borderColor: ConstantColors.tintColor,
    // elevation: 20,
    marginTop: -5
  },
});

export default Banner;
