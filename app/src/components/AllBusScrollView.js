import * as React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

import { busData } from "../utils/mock";

const AllBusScrollView = () => (
  <View
    style={{
      // backgroundColor: "gray",
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
      {busData.map((bus, i) => (
        <View
          key={i}
          style={{
            marginLeft: 10,
            marginRight: 10,
            width: 100,
            borderRadius: 50,
          }}
        >
          <Image style={styles.tinyLogo} source={{ uri: bus.image }} />
          <Card style={{ width: "100%", height: "25%", padding: 5 }}>
            <Text style={{fontWeight: "bold"}}>{bus.title}</Text>
            <Text>{bus.price}</Text>
          </Card>
        </View>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  tinyLogo: {
    width: "100%",
    height: 60,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});

export default AllBusScrollView;
