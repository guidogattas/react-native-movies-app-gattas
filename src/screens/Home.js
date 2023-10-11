import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { colors } from '../theme/colors';
import TrendingMovies from '../components/TrendingMovies';


const Home = () => {



  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>
        BIENVENIDOS
      </Text>
      <TrendingMovies />
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
  },
  text: {
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    color: colors.white,
    fontFamily: 'JosefinBold',
    fontSize: 30,
  },
});

export default Home;
