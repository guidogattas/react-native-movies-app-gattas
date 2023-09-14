import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Home from './src/screens/Home';
import Products from './src/screens/Products';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import ProductDetail from './src/screens/ProductDetail';
import RouteNavigation from './src/navigation/RouteNavigation';


export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinRegular: require("./assets/fonts/JosefinSans-Regular.ttf"),
    JosefinBold: require("./assets/fonts/JosefinSans-Bold.ttf")
  })
  
  if (!fontsLoaded) {
    return;
  }

  return (
    <NavigationContainer style={styles.container} >
      <RouteNavigation/>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
  }
});
