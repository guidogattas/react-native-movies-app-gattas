import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './src/navigation/TabNav';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


export default function App() {
  const [fontsLoaded] = useFonts({
    JosefinRegular: require("./assets/fonts/JosefinSans-Regular.ttf"),
    JosefinBold: require("./assets/fonts/JosefinSans-Bold.ttf")
  })

  if (!fontsLoaded) {
    return;
  }

  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container} >
        <TabNav />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
  }
});
