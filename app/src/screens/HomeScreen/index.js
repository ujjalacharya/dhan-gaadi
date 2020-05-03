import React, { Component } from "react";
import { Text, View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { Colors, TouchableRipple } from "react-native-paper";
import { connect } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeHeader from "../../components/HomeHeader";
import { Button, Card } from "react-native-paper";
import ConstantColors from "../../constants/ConstantColors";
import Banner from "../../components/Banner";
import AddressModal from "./Modals/AddressModal";
import moment from "moment";
import DatePickerModal from "./Modals/DatePickerModal";

export class HomeScreen extends Component {
  state = {
    text: "",
    showModal: false,
    addressState: "",
    pickedDate: "",
    pickedColor: "",
    showDatePickerModal: false,
    From: {},
    To: {},
  };

  handleModalVisibility = ({ addressState }) => {
    this.setState({
      showModal: !this.state.showModal,
      addressState,
    });
  };

  handleDatePicker = (when) => {
    const today = new Date();
    const tomorrow = new Date(today);
    if (when === "today") {
      this.setState({
        pickedDate: moment(today).format("YYYY-MM-DD"),
        pickedColor: "today",
      });
    } else if (when === "tomorrow") {
      tomorrow.setDate(tomorrow.getDate() + 1);
      this.setState({
        pickedDate: moment(tomorrow).format("YYYY-MM-DD"),
        pickedColor: "tomorrow",
      });
    } else if (when === "custom") {
      this.setState({
        pickedColor: "custom",
        showDatePickerModal: true,
      });
    }
  };

  handleCustomPicker = (event, selectedDate, callback) => {
    if (event.type === "dismissed") {
      this.setState({
        showDatePickerModal: false,
      });
    } else {
      const pickedDate = moment(selectedDate).format("YYYY-MM-DD");
      this.setState({
        pickedDate,
        pickedDateForPicker: selectedDate,
        showDatePickerModal: false,
      });
    }
    callback();
  };

  handleFromTo = (type, value) => {
    this.setState(
      {
        [type]: value,
      },
      () => {
        this.handleModalVisibility({
          addressState: "",
        });
      }
    );
  };

  render() {
    return (
      <>
        <AddressModal
          handleModalVisibility={this.handleModalVisibility}
          showModal={this.state.showModal}
          addressState={this.state.addressState}
          handleFromTo={this.handleFromTo}
        />
        <DatePickerModal
          showDatePickerModal={this.state.showDatePickerModal}
          handleCustomPicker={this.handleCustomPicker}
          pickedDateForPicker={this.state.pickedDateForPicker}
        />
        <HomeHeader headerTitle="DHAN-GAADI" />
        <View style={styles.container}>
          <Card style={{ height: "75%" }}>
            <View style={styles.searchbarContainer}>
              <Banner />
            </View>
            <View style={{ height: "50%", marginHorizontal: 20 }}>
              <TouchableRipple
                style={styles.inputField}
                onPress={() =>
                  this.handleModalVisibility({ addressState: "From" })
                }
              >
                <Text style={styles.inputText}>
                  {this.state.From.name || "FROM"}
                </Text>
              </TouchableRipple>
              <TouchableRipple
                style={styles.inputField}
                onPress={() =>
                  this.handleModalVisibility({ addressState: "To" })
                }
              >
                <Text style={styles.inputText}>
                  {this.state.To.name || "TO"}
                </Text>
              </TouchableRipple>

              <View style={styles.pickerContainer}>
                <Text style={{ fontSize: 20 }}>
                  {this.state.pickedDate || "Pick a date!"}
                </Text>
                <View style={styles.datePickerCircleContainer}>
                  <TouchableOpacity
                    style={{
                      ...styles.circleButton,
                      backgroundColor: this.state.pickedColor,
                      backgroundColor:
                        this.state.pickedColor === "today"
                          ? ConstantColors.bannerColor
                          : "gray",
                    }}
                    onPress={() => this.handleDatePicker("today")}
                  >
                    <Text style={{ color: "white" }}>Today</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      ...styles.circleButton,
                      backgroundColor:
                        this.state.pickedColor === "tomorrow"
                          ? ConstantColors.bannerColor
                          : "gray",
                    }}
                    onPress={() => this.handleDatePicker("tomorrow")}
                  >
                    <Text style={{ color: "white" }}>Tomorrow</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      ...styles.circleButton,
                      backgroundColor:
                        this.state.pickedColor === "custom"
                          ? ConstantColors.bannerColor
                          : "gray",
                    }}
                    onPress={() => this.handleDatePicker("custom")}
                  >
                    <Ionicons name="ios-calendar" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.submitButtonContainer}>
                <Button
                  mode="contained"
                  onPress={() => console.log("Pressed")}
                  style={styles.submitButton}
                  disabled={true}
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
    color: "black",
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
