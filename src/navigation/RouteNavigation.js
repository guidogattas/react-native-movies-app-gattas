import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ProductDetail from '../screens/ProductDetail'
import Products from '../screens/Products'
import { colors } from '../theme/colors'
import { Image, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator()

const headerOptions = (title) => ({
    title: title,
    headerTitleAlign: 'center',
    headerStyle: {
        width: '100%',
        backgroundColor: colors.lightGreen,
    },
    headerTitleStyle: {
        fontFamily: 'JosefinBold',
        fontSize: 24,
        fontWeight: "600",
        color: colors.heavyBlue,
    }
})

const LogoTitle = () => {
    return (
        <Image
            style={{ width: 80, height: 60, marginBottom: 10 }}
            source={require('../../assets/images/logo-ecommerce.png')}
        />

    )
}

const RouteNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen component={Home} name='home'
                options={{
                    ...headerOptions(''),
                    headerLeft: (props) => <LogoTitle  {...props} />,
                    headerRight: () => (
                        <Pressable onPress={() => {
                            alert('Próximamente')
                        }}>
                            <Feather name="menu" size={24} color="black"/>
                        </Pressable>
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

export default RouteNavigation
