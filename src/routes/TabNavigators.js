import React, { Component } from "react";
import { HomeStack, MessageStack, FeedStack } from "./StackNavigators";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

export default function TabNavigators() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Messages" component={MessageStack} />
          <Tab.Screen name="Feeds" component={FeedStack} />
        </Tab.Navigator>
    );
  }