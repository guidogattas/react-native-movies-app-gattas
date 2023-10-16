import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { colors } from '../theme/colors'
import Search from '../components/Search'

const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Header title={'Búsqueda'} />
            <Search />

        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.heavyBlue
    }

})
