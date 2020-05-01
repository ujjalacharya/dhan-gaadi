import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootRoute from './routes';

export default function Main() {
  return (
    <RootRoute />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
