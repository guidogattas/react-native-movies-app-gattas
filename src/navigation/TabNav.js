import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RootNavigation from './RootNavigation';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import ProfileNav from './ProfileNav';
import { useGetImageQuery } from '../services/ecApi';
import { Image } from 'react-native';
import SearchNav from './SearchNav';
import { useSelector } from 'react-redux';







const TabNav = () => {

    const uid = useSelector((state) => state.authSlice.uid);

    const defaultImage = "https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg";

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{
            title: "",
            headerShown: false,
            tabBarStyle: { height: 60, width: 'auto', backgroundColor: colors.tabNavBackground }
        }}>
            <Tab.Screen name='rootNavigation' component={RootNavigation}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <MaterialIcons name="video-library" size={focused ? 30 : 26} color={focused ? colors.tabNavButtonFocused : colors.tabNavButtonNotFocused} />
                }}
            />
            <Tab.Screen name='searchNav' component={SearchNav}
                options={{
                    tabBarIcon: ({ focused }) =>
                        < FontAwesome name="search" size={focused ? 30 : 26} color={focused ? colors.tabNavButtonFocused : colors.tabNavButtonNotFocused} />
                }}
            />
            <Tab.Screen name='profileNav' component={ProfileNav}
                options={{
                    tabBarIcon: ({ focused }) =>
                        <Image
                            style={focused ? styles.image : styles.imageNotFocused}
                            source={{ uri: defaultImage }}
                        />
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 30,
        width: 26,
        borderRadius: 100,
        borderColor: colors.tabNavButtonFocused,
    },
    imageNotFocused: {
        height: 26,
        width: 22,
        borderRadius: 100,
    }


})

export default TabNav

