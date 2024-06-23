import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Vocabulary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vocabulary Building</Text>
      <Text style={styles.description}>Learn 50 new SAT vocabulary words.</Text>
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

export default Vocabulary;
