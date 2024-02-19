import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Search from '../components/Search'
import MovieDetail from '../screens/MovieDetail'
import GenreDetail from '../screens/GenreDetail'
import { colors } from '../theme/colors'
import { StyleSheet } from 'react-native'


const Stack = createNativeStackNavigator()

const headerOptions = (title) => ({
    title: title,
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: colors.darkGray,
    },
    headerTitleStyle: {
        fontFamily: 'JosefinBold',
        fontSize: 24,
        fontWeight: "600",
        color: colors.orange,
        // height: 25,
    }
})


const SearchNav = () => {
    return (
        <Stack.Navigator initialRouteName='search'>
            <Stack.Screen options={{ headerShown: false }} component={Search} name='search'
            />
            <Stack.Screen component={MovieDetail} name='movieDetail'
                options={{ ...headerOptions('Detalles'), headerTintColor: colors.orange }}
            />
            <Stack.Screen component={GenreDetail} name='genreDetail'
                options={{ ...headerOptions('Películas por Género '), headerTintColor: colors.orange }}
            />
        </Stack.Navigator>
    )
}

export default SearchNav

