import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { colors } from '../theme/colors';
import TrendingMovies from '../components/TrendingMovies';
import TrendingSeries from '../components/TrendingSeries';
import TopRatedMovies from '../components/TopRatedMovies';
import DiscoverMovies from '../components/DiscoverMovies';


const Home = () => {

  /**
   * Componente que muestra el inicio de la App, una vez logueado. 
  */

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerDisplay}>
        <TrendingMovies />
        <TrendingSeries />
        <TopRatedMovies />
        <DiscoverMovies />
      </View>
    </ScrollView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  containerDisplay: {
    marginBottom: 50,
  }
});

export default Home;
