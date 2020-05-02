import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Modal, Portal, TextInput, Colors } from "react-native-paper";
import { connect } from "react-redux";
import HomeHeader from "../../components/HomeHeader";
import { Button, Card } from "react-native-paper";
import ConstantColors from "../../constants/ConstantColors";
import Ionicons from "@expo/vector-icons/Ionicons";


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
              <Button
                mode="contained"
                color="white"
                style={styles.sloganButton}
                onPress={() => console.log("Pressed")}
              >
                <Text style={{ color: ConstantColors.tintColor, fontSize: 20 }}>
                  Get Seat Go!
                </Text>
              </Button>
            </View>
            <View style={{ height: "50%", marginHorizontal: 20 }}>
              <View style={styles.inputField}>
                <Text style={{ padding: 15, color: "gray", fontSize: 15 }}>
                  FROM
                </Text>
              </View>
              <View style={styles.inputField}>
                <Text style={{ padding: 15, color: "gray", fontSize: 15 }}>
                  TO
                </Text>
              </View>
            
              <View
                style={{
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20 }}>Pick a date!</Text>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
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
              <View
                style={{
                  marginTop: 25,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  mode="contained"
                  onPress={() => console.log("Pressed")}
                  style={{
                    width: "80%",
                    borderRadius: 50,
                    flex: 1,
                    justifyContent: "center",
                  }}
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
    marginTop: 10,
  },
  searchbarContainer: {
    height: "15%",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  sloganButton: {
    width: "90%",
    // height: "40%",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: ConstantColors.tintColor,
    elevation: 8,
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
});

function mapStateToProps(state) {
  return {
    isAuth: state.User.auth.isAuth,
  };
}

export default connect(mapStateToProps)(HomeScreen);
