// views/ProductScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ProductViewModel from '../viewmodels/ProductViewModel';

const ProductScreen = () => {
  const productViewModel = new ProductViewModel();
  const products = productViewModel.getProducts();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ProductScreen;
