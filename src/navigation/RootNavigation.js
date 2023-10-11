import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ProductDetail from '../screens/ProductDetail'
import Products from '../screens/Products'
import { colors } from '../theme/colors'
import { Image, Pressable, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';

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
            <Stack.Screen component={Products} name="products"
                options={({ route }) => ({
                    ...headerOptions(route.params.item),
                })}
            />
            <Stack.Screen component={ProductDetail} name="productDetail"
                options={{ ...headerOptions('Product Details') }}
            />
        </Stack.Navigator>
    )
}

export default RootNavigation
