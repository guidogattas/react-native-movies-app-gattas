import { StyleSheet, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'
import { colors } from '../theme/colors'
// import { useSelector } from 'react-redux'

const Home = ({ navigation }) => {


  // const categories = useSelector((state) => state.homeSlice.allCategories)
  // console.log(categories)

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/costo-plataforma.jpg')}
      />
      <Text style={styles.text}>
        BIENVENIDOS A NUESTRO E-COMMERCE
      </Text>
      <Categories
        navigation={navigation}
      />
    </ScrollView>
  )
}

export default Home

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
  image: {
    height: 200,
    width: "100%",
    marginVertical: 40,
  }
})