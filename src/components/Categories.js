import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { categories } from '../data/categories'
import { colors } from '../theme/colors'
import CategoryItem from './CategoryItem'

const Categories = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={(key) => key}
                renderItem={({ item }) =>
                    <CategoryItem
                        item={item}
                        navigation={navigation}
                    />}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.violet,
        flex: 1,
    },
})

export default Categories