import React, { Component } from "react";
import { Text, View } from "react-native";
import { Appbar, ProgressBar } from "react-native-paper";

var i = 0;
var color = ["#ad7a99", "#b2cede", "#8cdfd6", "#5a716a"];

export class SearchScreen extends Component {
  state = {
    progressBar: 0,
    intervalId: "",
    progressColor: "#b2cede",
  };

  componentDidMount() {
    var intervalId = setInterval(this.timer, 100);
    // store intervalId in the state so it can be accessed later:
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }

  timer = () => {
    console.log("running", this.state.progressBar);
    // setState method is used to update the state
    var newCount = this.state.progressBar + 5;

    if (newCount <= 300) {
      this.setState({ progressBar: newCount, progressColor: color[i] }, () => {
        i = (i + 1) % color.length;
      });
    } else {
      clearInterval(this.state.intervalId);
    }
  };

  _goBack = () => {
    this.props.navigation.pop();
  };

  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Search" />
        </Appbar.Header>
        {this.state.progressBar < 300 && (
          <ProgressBar progress={100} color={this.state.progressColor} />
        )}
        <Text> Search Screen </Text>
      </View>
    );
  }
}

export default SearchScreen;
