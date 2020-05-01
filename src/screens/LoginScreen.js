import React, { Component } from "react";
import { Text, View, StyleSheet, Button, AsyncStorage } from "react-native";
import { connect } from 'react-redux';

import { signIn} from '../store/actions/user_actions';
import { bindActionCreators } from 'redux';

export class LoginScreen extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({ title: "Login" });
  }

  handleLogin = async () => {
    this.props.signIn("fdf");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Login Screen </Text>
        <Button title="Login" onPress={this.handleLogin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});


function mapStateToProps(state){
  return {
      isAuth: state.User.auth.isAuth
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({signIn},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen);
