import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'

const Home = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <Categories navigation={navigation} />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  }
})