import { StyleSheet  } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RouteNavigation from './RouteNavigation';
import Profile from '../screens/Profile';
import { Feather, Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
colors

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
            <Tab.Navigator screenOptions={{ title: "", headerShown: false, tabBarStyle: { height: 60, width: 'auto' } }}>
                <Tab.Screen name='routeNavigation' component={RouteNavigation}
                    options={{
                        tabBarIcon: ({ focused }) => <Feather name="shopping-bag" size={focused ? 30 : 26} color={focused ? colors.lightBlue : colors.heavyBlue} />
                    }}
                />
                <Tab.Screen name='profile' component={Profile}
                    options={{ tabBarIcon: ({ focused }) => <Ionicons name="person-circle-outline" size={focused ? 30 : 26} color={focused ? colors.lightBlue : colors.heavyBlue} /> }}
                />
            </Tab.Navigator>
    )
}

export default TabNav

const styles = StyleSheet.create({})