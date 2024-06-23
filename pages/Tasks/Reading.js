import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Reading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reading Comprehension</Text>
      <Text style={styles.description}>Read and analyze the provided passage.</Text>
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

export default Reading;
