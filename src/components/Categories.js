import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { categories } from '../data/categories'
import { colors } from '../theme/colors'
import CategoryItem from './CategoryItem'

const Categories = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {categories.map((item) => (
                <CategoryItem
                    key={item}
                    item={item}
                    navigation={navigation}
                />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default Categories