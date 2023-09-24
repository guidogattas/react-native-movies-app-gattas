import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const CategoryItem = ({ navigation, item }) => {

  return (
    <Pressable
      onPress={() => navigation.navigate('products', { item: item })}
    >
      <Text style={styles.categoryText}>
        {item}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  categoryText: {
    fontFamily: 'JosefinRegular',
    textTransform: 'capitalize',
    fontSize: 20,
    margin: 2,
    marginHorizontal: 20,
    color: colors.white,
    textAlign: "center",
    alignItems: "center",
    padding: 8,
    marginVertical: 4,
    borderColor: colors.lightBlue,
    borderRadius: 10,
    borderWidth: 2,
  }
})

export default CategoryItem