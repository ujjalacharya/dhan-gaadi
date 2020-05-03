import React, { Component } from "react";
import { Text, View, Alert } from "react-native";
import { List } from "react-native-paper";

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
        {data.map((datum) => (
          <List.Item
            key={datum.id}
            title={datum.name}
            onPress={()=> handleFromTo(addressState, datum)}

            // description="Item description"
            // left={props => <List.Icon {...props} icon="folder" />}
          />
        ))}
      </View>
    );
  }
}

export default AddressList;
