// views/CategoryScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import CategoryViewModel from '../viewmodels/CategoryViewModel';

const CategoryScreen = () => {
  const categoryViewModel = new CategoryViewModel();
  const categories = categoryViewModel.getCategories();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CategoryScreen;
