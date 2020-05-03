import * as React from "react";
import { View, ScrollView, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

const AllBusScrollView = () => (
  <View
    style={{
      backgroundColor: "gray",
      height: "40%",
      width: "100%",
      position: "absolute",
      bottom: 0,
    }}
  >
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={200}
      decelerationRate="fast"
    >
      <Text>dfdgfdgdfgdfgdfgdfgdfgdfgdgdf</Text>
      <Text>dfdgfdgdfgdfgdfgdfgdfgdfgdgdf</Text>
      <Text>dfdgfdgdfgdfgdfgdfgdfgdfgdgdf</Text>
      <Text>dfdgfdgdfgdfgdfgdfgdfgdfgdgdf</Text>
      <Text>dfdgfdgdfgdfgdfgdfgdfgdfgdgdf</Text>
      <Text>dfdgfdgdfgdfgdfgdfgdfgdfgdgdf</Text>
      <Text>dfdgfdgdfgdfgdfgdfgdfgdfgdgdf</Text>
      <Text>dfdgfdgdfgdfgdfgdfgdfgdfgdgdf</Text>
      <Text>dfdgfdgdfgdfgdfgdfgdfgdfgdgdf</Text>
      <Text>dfdgfdgdfgdfgdfgdfgdfgdfgdgdf</Text>
      <Text>dfdgfdgdfgdfgdfgdfgdfgdfgdgdf</Text>
    </ScrollView>
  </View>
);

export default AllBusScrollView;
