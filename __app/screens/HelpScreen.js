import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default function HelpScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>We'll help you out</Text>
    </ScrollView>
  );
}

HelpScreen.navigationOptions = {
  title: 'Help',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
