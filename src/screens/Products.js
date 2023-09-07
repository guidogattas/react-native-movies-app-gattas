import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View, } from 'react-native'
import Header from '../components/Header'
import Search from '../components/Search'
import { products } from '../data/products'
import ProductItem from '../components/ProductItem'
import { AntDesign } from '@expo/vector-icons';

const Products = ({ category, setCategorySelected }) => {

  const [text, setText] = useState('')
  const [categoryProd, setCategoryProd] = useState([])

  useEffect(() => {
    const categoryProducts = products.filter((el) => el.category === category);
    setCategoryProd(categoryProducts);


    if (text) {
      const titleProduct = products.filter((el) => el.title.toLowerCase().startsWith(text.toLowerCase())
      );
      setCategoryProd(titleProduct);
    }

  }, [text, category]);



  return (
    <View>
      <Header title='Productos' />
      <Search text={text} setText={setText} />
      <Pressable style={styles.pressable} onPress={()=>{setCategorySelected("")}}>
        <AntDesign name="home" size={40} color="black" />
        <Text>HOME</Text>
      </Pressable>
      <FlatList
        data={categoryProd}
        keyExtractor={categoryProd.id}
        renderItem={({ item }) =>
          <ProductItem
            item={item}
          />
        }
      />

    </View>
  )
}

export default Products

const styles = StyleSheet.create({
  pressable: {
    display: 'flex',
    alignItems: 'center',
}

})