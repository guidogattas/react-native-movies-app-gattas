import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { categories } from '../data/categories'
import { colors } from '../theme/colors'
import CategoryItem from './CategoryItem'

const Categories = ({ setCategorySelected }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={(key) => key}
                renderItem={({ item }) => <CategoryItem
                    category={item}
                    setCategorySelected={setCategorySelected}
                />}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.heavyBlue,

    }
})

export default Categories