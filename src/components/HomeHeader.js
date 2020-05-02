import React, { Component } from "react";
import { Appbar } from "react-native-paper";

export class HomeHeader extends Component {
  render() {
    const { headerTitle } = this.props;
    return (
      <Appbar.Header>
        <Appbar.Content title={headerTitle} />
      </Appbar.Header>
    );
  }
}

export default HomeHeader;
