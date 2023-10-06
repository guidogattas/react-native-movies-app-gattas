import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RootNavigation from './RootNavigation';
import { Feather, Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import ProfileNav from './ProfileNav';
colors

const Tab = createBottomTabNavigator();

const TabNav = () => {
    return (
        <Tab.Navigator screenOptions={{
            title: "",
            headerShown: false,
            tabBarStyle: { height: 60, width: 'auto' }
        }}>
            <Tab.Screen name='rootNavigation' component={RootNavigation}
                options={{
                    tabBarIcon: ({ focused }) => <Feather name="shopping-bag" size={focused ? 30 : 26} color={focused ? colors.lightBlue : colors.heavyBlue} />
                }}
            />
            <Tab.Screen name='profileNav' component={ProfileNav}
                options={{ tabBarIcon: ({ focused }) => <Ionicons name="person-circle-outline" size={focused ? 30 : 26} color={focused ? colors.lightBlue : colors.heavyBlue} /> }}
            />
        </Tab.Navigator>
    )
}

export default TabNav

const styles = StyleSheet.create({})