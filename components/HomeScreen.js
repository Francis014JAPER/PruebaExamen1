import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Categorías"
        onPress={() => navigation.navigate('Categories')}
        color="#007bff"
      />
      <Button
        title="Productos"
        onPress={() => navigation.navigate('Products')}
        color="#28a745"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
