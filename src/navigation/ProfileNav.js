import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import MapaLoc from '../screens/MapaLoc';
import Profile from '../screens/Profile';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ProfileNav = () => {
    return (
        <Stack.Navigator
            initialRouteName='profile'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="mapaLoc" component={MapaLoc} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})

export default ProfileNav