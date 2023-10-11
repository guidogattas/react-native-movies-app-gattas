import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, SafeAreaView } from 'react-native'
// import { products } from '../data/products'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
import { colors } from '../theme/colors'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery, useGetMoviesQuery } from '../services/ecApi'


const Products = ({ route, navigation }) => {

  const [text, setText] = useState('')
  const [categoryProd, setCategoryProd] = useState([])
  const { item } = route.params;
  const { data: products, isLoading, isError } = useGetMoviesQuery()

  const productsFilterByCategories = useSelector((state) => state.homeSlice.productsFilterByCategories);

  useEffect(() => {

    setCategoryProd(productsFilterByCategories);

    if (text) {
      const titleProduct = products.filter((el) => el.title.toLowerCase().startsWith(text.toLowerCase())
      );
      setCategoryProd(titleProduct);
    }
  }, [text, item]);



  return (
    <SafeAreaView style={styles.container}>
      <Search text={text} setText={setText} />
      <FlatList
        data={categoryProd}
        keyExtractor={categoryProd.id}
        style={styles.flatList}
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
    backgroundColor: colors.white,
  },
  pressable: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  }

})