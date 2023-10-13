
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const SearchMovies = () => {


    return (
        <View style={styles.container}>
            <Text>SearchMovies</Text>

        </View>
    )
}

export default SearchMovies

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.orange
    }

})