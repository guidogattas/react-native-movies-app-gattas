import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import { colors } from '../theme/colors'
import { Image, Pressable, Text } from 'react-native'
import MovieDetail from '../screens/MovieDetail'

const Stack = createNativeStackNavigator()

const headerOptions = (title) => ({
    title: title,
    headerTitleAlign: 'center',
    headerStyle: {
        backgroundColor: colors.headerNavigationBackground,
    },
    headerTitleStyle: {
        fontFamily: 'JosefinBold',
        fontSize: 24,
        fontWeight: "600",
        color: colors.headerNavigationFont,
        // height: 25,
    }
})

const RootNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen component={Home} name='home'
                options={{
                    ...headerOptions(''),
                    headerLeft: () => (
                        <Text style={{ ...headerOptions('').headerTitleStyle, marginLeft: 10 }}>
                            Watch Movies
                        </Text>
                    ),
                }}
            />
            <Stack.Screen component={MovieDetail} name='movieDetail'
                options={{ ...headerOptions('Detalles'), headerTintColor: colors.headerNavigationFont }}
            />
        </Stack.Navigator>
    )
}

export default RootNavigation
