import React, { Component } from "react";
import {
  Text,
  View,
  Modal,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export class AddressModal extends Component {

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.showModal}
        onRequestClose={() => {
          this.props.handleModalVisibility({
            addressState: this.props.addressState,
          });
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Ionicons
              name="ios-close-circle"
              size={30}
              color="red"
              style={{ ...styles.openButton }}
              onPress={() => {
                this.props.handleModalVisibility({
                  addressState: this.props.addressState,
                });
              }}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      height: "80%",
      width: "100%",
      margin: 20,
      backgroundColor: "#DCDCDC",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    openButton: {
      position: "absolute",
      right: 15,
      marginTop: 10,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  });
  
  export default AddressModal;
  