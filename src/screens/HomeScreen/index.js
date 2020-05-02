import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Modal, Portal, TextInput } from "react-native-paper";
import { connect } from "react-redux";
import HomeHeader from "../../components/HomeHeader";
import { Button, Card } from "react-native-paper";
import ConstantColors from "../../constants/ConstantColors";

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
          <Card style={{height: "60%"}}>
            <View style={styles.searchbarContainer}>
              <Button
                mode="contained"
                color={ConstantColors.grayColor}
                style={styles.sloganButton}
                onPress={() => console.log("Pressed")}
              >
                Get Seat Go!
              </Button>
            </View>
            <View style={{ height: "50%", margin: 20 }}>
              <TextInput
                label="FROM"
                mode="outlined"
                theme={{
                  colors: {
                    primary: ConstantColors.tintColor,
                  },
                }}
                style={{height: 50}}
              />
              <TextInput
                label="TO"
                mode="outlined"
                theme={{
                  colors: {
                    primary: ConstantColors.tintColor,
                  },
                }}
                style={{ marginTop: 20, height: 50 }}
              />
              <View style={{marginTop: 20, height: 50, justifyContent: "center", alignItems: "center"}}>

              <Button
                mode="contained"
                onPress={() => console.log("Pressed")}
                style={{ width: "60%", borderRadius: 50, flex: 1, justifyContent: "center" }}
                >
                <Text style={{fontSize: 20}}>GO !</Text>
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
    margin: 10,
  },
  sloganButton: {
    width: "90%",
    // height: "40%",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: ConstantColors.tintColor,
    elevation: 8,
  },
});

function mapStateToProps(state) {
  return {
    isAuth: state.User.auth.isAuth,
  };
}

export default connect(mapStateToProps)(HomeScreen);
