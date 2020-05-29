import React, {useState} from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { View, Image, StyleSheet, Alert, Text } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import ConstantColors from "../constants/ConstantColors";
import SeatModal from "../screens/AfterGo/SeatModal"

const SearchedSingleBus = ({ bus }) => {

  const [state, setState] = useState({showModal: false})

  const  handleModalVisibility = () => {
    setState({
      showModal: !state.showModal,
    });
  };

 return <>
  <SeatModal 
   handleModalVisibility={handleModalVisibility}
   showModal={state.showModal}
   addressState={state.addressState}
  //  handleFromTo={handleFromTo}
  />
  <TouchableNativeFeedback
    style={{ marginBottom: 5 }}
    onPress={() => handleModalVisibility()}
  >
    <Card>
      <Card.Content>
        <View>
          <Image style={styles.tinyLogo} source={{ uri: bus.image }} />

          <Title>{bus.title}</Title>
          <Paragraph>{bus.price}</Paragraph>
          <View style={styles.rowFlex}>
            <View style={{ flex: 1 }}>
              <Text>{bus.seats} seats</Text>
            </View>
            <View style={{ flex: 3 }}>
              <Text>Time: {bus.time}</Text>
            </View>
          </View>
        </View>
      </Card.Content>
      <Card.Actions
        style={{ backgroundColor: ConstantColors.initialColor, marginTop: 5 }}
      >
        <View style={styles.rowFlex}>
          <Button>Wifi</Button>
          <Button>TV</Button>
          <Button>Mobile Charger</Button>
          <Button>AC</Button>
        </View>
      </Card.Actions>
    </Card>
  </TouchableNativeFeedback>
  </>
}


const styles = StyleSheet.create({
  rowFlex: {
    display: "flex",
    flexDirection: "row",
  },
  tinyLogo: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});

export default SearchedSingleBus;
