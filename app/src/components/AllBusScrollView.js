import * as React from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";
import Title from "../components/common/Title";

import { busData } from "../utils/mock";
import { TouchableOpacity } from "react-native-gesture-handler";

const AllBusScrollView = () => (
  <View style={styles.container}>
    {/* <View style={{marginTop: 20}}>
    <Title>Our Buses</Title>
    </View> */}

    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={200}
      decelerationRate="fast"
    >
      {busData.map((bus, i) => (
        <TouchableOpacity key={i} style={styles.cardContainer}>
          <View style={styles.cardWrapper}>
            <Image style={styles.tinyLogo} source={{ uri: bus.image }} />
            <Card style={styles.busDetails}>
              <Text style={{ fontWeight: "bold" }}>{bus.title}</Text>
              <Text>{bus.price}</Text>
            </Card>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    // height: "40%",
    width: "100%",
    // position: "absolute",
    // bottom: 5,
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
  },
  cardContainer: {
    // marginLeft: 10,
    marginRight: 10,
    width: 150,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: "100%",
  },
  cardWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  busDetails: {
    width: "100%",
    height: "35%",
    padding: 5,
  },
  tinyLogo: {
    width: "100%",
    height: 80,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});

export default AllBusScrollView;
