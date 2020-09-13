import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeStack, MessageStack, ProfileStack } from "./StackNavigators";
import ConstantColors from "../constants/ConstantColors";

const Tab = createBottomTabNavigator();

export default function TabNavigators() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = `home`;
          } else if (route.name === "Profile") {
            iconName = `face-profile`;
          } else if (route.name === "Messages") {
            iconName = `infocirlceo`;
          } else if (route.name === "Help") {
            iconName = `ios-call`;
          }

          return iconName === "face-profile" ? (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          ) : (
            <AntDesign name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        inactiveTintColor: ConstantColors.inactiveTintColor,
        activeTintColor: ConstantColors.cardColor,
        showLabel: false,
        // activeBackgroundColor:'#00194b',
        inactiveBackgroundColor: ConstantColors.tintColor,
        style: {
          backgroundColor: ConstantColors.tintColor,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Messages" component={MessageStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}
