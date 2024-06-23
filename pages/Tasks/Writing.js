import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Writing = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Writing Practice</Text>
      <Text style={styles.description}>Write an essay on the given topic.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default Writing;
