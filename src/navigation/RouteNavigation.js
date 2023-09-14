import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ProductDetail from '../screens/ProductDetail'
import Products from '../screens/Products'
import { colors } from '../theme/colors'

const Stack = createNativeStackNavigator()

const RouteNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='home'>
            <Stack.Screen component={Home} name='home'
                options={{
                title: 'Home',
                headerTitleAlign: 'center',
                headerStyle: {
                    height: 85,
                    width: "100%",
                    backgroundColor: colors.lightGreen,
                },
                headerTitleStyle: {
                    fontFamily: 'JosefinBold',
                    fontSize: 25,
                    fontWeight: "600",
                    marginTop: 30,
                    color: colors.heavyBlue,
                }
            }} />
            <Stack.Screen component={Products} name="products"
                            options={{
                title: 'Products',
                headerTitleAlign: 'center',
                headerStyle: {
                    height: 85,
                    width: "100%",
                    backgroundColor: colors.lightGreen,
                },
                headerTitleStyle: {
                    fontFamily: 'JosefinBold',
                    fontSize: 25,
                    fontWeight: "600",
                    marginTop: 30,
                    color: colors.heavyBlue,
                }
            }} 
            />
            <Stack.Screen component={ProductDetail} name="productDetail"
                            options={{
                title: 'ProductDetail',
                headerTitleAlign: 'center',
                headerStyle: {
                    height: 85,
                    width: "100%",
                    backgroundColor: colors.lightGreen,
                },
                headerTitleStyle: {
                    fontFamily: 'JosefinBold',
                    fontSize: 25,
                    fontWeight: "600",
                    marginTop: 30,
                    color: colors.heavyBlue,
                }
            }} 
            />
        </Stack.Navigator>
    )
}

export default RouteNavigation
