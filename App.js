import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './src/screens/Home';
import Products from './src/screens/Products';
import { useState } from 'react';

export default function App() {

  const [categorySelected, setCategorySelected] = useState ("")

  return (
    <View style={styles.container} >

      {
        categorySelected ?
      <Products
        category={categorySelected}
        setCategorySelected={setCategorySelected}
      />
          :
      <Home
        setCategorySelected={setCategorySelected}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  }
});
