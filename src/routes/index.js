import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigators from "./TabNavigators";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigators/>
    </NavigationContainer>
  );
}