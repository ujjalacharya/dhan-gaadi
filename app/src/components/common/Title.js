import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import ConstantColors from '../../constants/ConstantColors';

const Title = ({ children }) => (
  <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: ConstantColors.tintColor,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
});

export default memo(Title);