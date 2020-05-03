import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { Colors, TouchableRipple } from "react-native-paper";
import { connect } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeHeader from "../../components/HomeHeader";
import { Button, Card } from "react-native-paper";
import ConstantColors from "../../constants/ConstantColors";
import Banner from "../../components/Banner";

export class HomeScreen extends Component {
  state = {
    text: "",
    visible: false,
  };

  render() {
    return (
      <>
        <HomeHeader headerTitle="DHAN-GAADI" />
        <View style={styles.container}>
          <Card style={{ height: "75%" }}>
            <View style={styles.searchbarContainer}>
              <Banner />
            </View>
            <View style={{ height: "50%", marginHorizontal: 20 }}>
              <TouchableRipple
                style={styles.inputField}
                onPress={() => Alert.alert("Show From modal")}
              >
                <Text style={styles.inputText}>FROM</Text>
              </TouchableRipple>
              <TouchableRipple
                style={styles.inputField}
                onPress={() => Alert.alert("Show To modal")}
              >
                <Text style={styles.inputText}>TO</Text>
              </TouchableRipple>

              <View style={styles.pickerContainer}>
                <Text style={{ fontSize: 20 }}>Pick a date!</Text>
                <View style={styles.datePickerCircleContainer}>
                  <View style={styles.circleButton}>
                    <Text style={{ color: "white" }}>Today</Text>
                  </View>
                  <View style={styles.circleButton}>
                    <Text style={{ color: "white" }}>Tomorrow</Text>
                  </View>
                  <View style={styles.circleButton}>
                    <Ionicons name="ios-attach" size={20} color="white" />
                  </View>
                </View>
              </View>
              <View style={styles.submitButtonContainer}>
                <Button
                  mode="contained"
                  onPress={() => console.log("Pressed")}
                  style={styles.submitButton}
                >
                  <Text style={{ fontSize: 20 }}>GO !</Text>
                </Button>
              </View>
            </View>
          </Card>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },

  searchbarContainer: {
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30,
  },

  inputField: {
    marginTop: 20,
    height: 40,
    backgroundColor: "#DCDCDC",
    justifyContent: "center",
    borderColor: Colors.tintColor,
    borderWidth: 1,
    borderRadius: 5,
    elevation: 5,
  },

  inputText: {
    padding: 15,
    color: "gray",
    fontSize: 15,
  },

  pickerContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  datePickerCircleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  circleButton: {
    padding: 5,
    height: 80,
    width: 80, //The Width must be the same as the height
    borderRadius: 200, //Then Make the Border Radius twice the size of width or Height
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: ConstantColors.grayColor,
    elevation: 10,
  },

  submitButtonContainer: {
    marginTop: 25,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  
  submitButton: {
    width: "80%",
    borderRadius: 50,
    flex: 1,
    justifyContent: "center",
  },
});

function mapStateToProps(state) {
  return {
    isAuth: state.User.auth.isAuth,
  };
}

export default connect(mapStateToProps)(HomeScreen);
