import React from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text } from 'react-native'
import { colors } from '../theme/colors'
import CategoryItem from './CategoryItem'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../services/ecApi'

const Categories = ({ navigation }) => {

    const {
        data: categories,
        isLoading,
        isError,
        error
    } = useGetCategoriesQuery()



    return (
        isLoading
            ? <ActivityIndicator size="large" color="#00ff00" />
            : isError
                ? (
                    <ScrollView contentContainerStyle={styles.container}>
                        <Text style={styles.errorMsg}>Error {error}...</Text>
                    </ScrollView>
                )
                : (
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    errorMsg: {
        alignSelf: 'center',
        fontSize: 30,
        fontFamily: 'JosefinBold',
        marginTop: 10,
    },
})

export default Categories