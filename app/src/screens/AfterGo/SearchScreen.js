import React, { Component } from "react";
import { Text, View } from "react-native";
import { Appbar } from "react-native-paper";

import { connect } from "react-redux";

export class SearchScreen extends Component {
  state = {
    progressBar: 0,
    intervalId: "",
    progressColor: "#b2cede",
  };

  _goBack = () => {
    this.props.navigation.pop();
  };

  render() {
    console.log(this.props)
    return (
      <View>
        <Appbar.Header>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Search" />
        </Appbar.Header>
        {/* <ActivityIndicator animating={true} color={ConstantColors.tintColor}/> */}
        <Text> Search Screen </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    Journey: state.Journey.journey_store,
  };
}

export default connect(mapStateToProps)(SearchScreen);
