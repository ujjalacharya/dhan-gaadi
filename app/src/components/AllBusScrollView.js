import * as React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

import { busData } from "../utils/mock";
import { TouchableOpacity } from "react-native-gesture-handler";

const AllBusScrollView = () => (
  <View style={styles.container}>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={200}
      decelerationRate="fast"
    >
      {busData.map((bus, i) => (
        <TouchableOpacity key={i} style={styles.cardContainer}>
          <Image style={styles.tinyLogo} source={{ uri: bus.image }} />
          <Card style={styles.busDetails}>
            <Text style={{ fontWeight: "bold" }}>{bus.title}</Text>
            <Text>{bus.price}</Text>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: "40%",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  cardContainer: {
    marginLeft: 10,
    marginRight: 10,
    width: 100,
    borderRadius: 50,
    height: "100%",
  },
  busDetails: {
    width: "100%",
    height: "25%",
    padding: 5,
  },
  tinyLogo: {
    width: "100%",
    height: 60,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});

export default AllBusScrollView;
