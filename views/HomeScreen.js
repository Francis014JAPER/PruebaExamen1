// views/HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Categorías"
        onPress={() => navigation.navigate('Categories')}
      />
      <Button
        title="Productos"
        onPress={() => navigation.navigate('Products')}
      />
    </View>
  );
};

export default HomeScreen;
