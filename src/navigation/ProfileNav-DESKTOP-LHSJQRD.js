import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Profile from '../screens/Profile';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ProfileNav = () => {
    return (
        <Stack.Navigator
            initialRouteName='profile'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen component={Profile} name="profile" />
        </Stack.Navigator>
    )
}

export default ProfileNav