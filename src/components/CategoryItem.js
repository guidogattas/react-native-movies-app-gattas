import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const CategoryItem = ({ setCategorySelected, category }) => {

  const handleCategoryPress = () => {
  setCategorySelected(category);
}


  return (
    <TouchableOpacity
      onPress={handleCategoryPress}	
    >
      <Text style={styles.categoryText}>{category}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  categoryText: {
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