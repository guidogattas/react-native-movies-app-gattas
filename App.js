import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import MainNav from './src/navigation/MainNav';


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
      <StatusBar style='light' />
      <MainNav />
    </Provider>
  );
}

const styles = StyleSheet.create({

});
