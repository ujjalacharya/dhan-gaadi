import React, { Component } from "react";
import { Text, View, Button, AsyncStorage } from "react-native";

import { connect } from "react-redux";

import { signOut } from "../store/actions/user_actions";
import { bindActionCreators } from "redux";

class FeedScreen extends Component {
  handleLogout = async () => {
    this.props.signOut();
  };

  render() {
    return (
      <View>
        <Text> Feed Screen </Text>
        <Button title="Logout" onPress={this.handleLogout} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuth: state.User.auth.isAuth,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ signOut }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
