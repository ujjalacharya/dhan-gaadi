import React, { Component } from "react";
import { Text, View, Alert } from "react-native";
import { List } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

export class AddressList extends Component {
  render() {
    const { data, addressState, handleFromTo } = this.props;
    return (
      <View
        style={{
          backgroundColor: "#DCDCDC",
          flex: 1,
          width: "100%",
          margin: 20,
        }}
      >
        <ScrollView>
          {data.map((datum) => (
            <List.Item
              key={datum.id}
              title={datum.name}
              onPress={() => handleFromTo(addressState, datum)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default AddressList;
