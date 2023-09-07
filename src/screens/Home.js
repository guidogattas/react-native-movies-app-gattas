import { StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'

const Home = ({ setCategorySelected }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Categorías' />
      <Categories
        setCategorySelected={setCategorySelected}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    height: '100%',
  }
})