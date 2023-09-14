import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, SafeAreaView } from 'react-native'
import Search from '../components/Search'
import { products } from '../data/products'
import ProductItem from '../components/ProductItem'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../theme/colors'


const Products = ({ route, navigation }) => {

  const [text, setText] = useState('')
  const [categoryProd, setCategoryProd] = useState([])

  const { item } = route.params;

  useEffect(() => {
    const categoryProducts = products.filter((el) => el.category === item);
    setCategoryProd(categoryProducts);


    if (text) {
      const titleProduct = products.filter((el) => el.title.toLowerCase().startsWith(text.toLowerCase())
      );
      setCategoryProd(titleProduct);
    }

  }, [text, item]);



  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.pressable} onPress={() => navigation.navigate('home')} >
        <AntDesign name="home" size={40} color="black" />
        <Text>HOME</Text>
      </Pressable>
      <Search text={text} setText={setText} />
      <FlatList
        data={categoryProd}
        keyExtractor={categoryProd.id}
        renderItem={({ item }) =>
          <ProductItem
            navigation={navigation}
            item={item}
          />
        }
      />

    </SafeAreaView>
  )
}

export default Products

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lime,
  },
  pressable: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  }

})