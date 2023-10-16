import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { colors } from '../theme/colors';
import TrendingMovies from '../components/TrendingMovies';
import TrendingSeries from '../components/TrendingSeries';
import TopRatedMovies from '../components/TopRatedMovies';
import DiscoverMovies from '../components/DiscoverMovies';


const Home = () => {

  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.text}>
        RECOMENDACIONES
      </Text> */}
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
    backgroundColor: colors.heavyBlue,
  },
  text: {
    textAlign: 'center',
    marginVertical: 40,
    marginHorizontal: 10,
    color: colors.white,
    fontFamily: 'JosefinBold',
    fontSize: 26,
  },
  containerDisplay: {
    marginBottom: 50,
  }
});

export default Home;
