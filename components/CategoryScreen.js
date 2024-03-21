import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CategoryScreen = () => {
  const categories = ['Electrónica', 'Ropa', 'Hogar', 'Alimentos', 'Libros'];

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item) => item}
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

export default CategoryScreen;
