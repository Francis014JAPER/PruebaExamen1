import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ProductScreen = () => {
  const products = [
    { id: 1, name: 'Coca-Cola' },
    { id: 2, name: 'Squirt' },
    { id: 3, name: 'Galletas Oreo' },
    { id: 4, name: 'Doritos' },
    { id: 5, name: 'Chettos' },
    { id: 6, name: 'Gomitas Panda' },
    { id: 7, name: 'Café' },
    { id: 8, name: 'Leche' },
    { id: 9, name: 'Yogur ' },
    { id: 10, name: 'Mermelada ' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProductScreen;
