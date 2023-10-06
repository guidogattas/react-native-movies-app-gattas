import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import AuthNav from './AuthNav'
import TabNav from './TabNav'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../redux/slice/authSlice'



const MainNav = () => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.authSlice.user);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await AsyncStorage.getItem('userData');
                if (userData) {
                    dispatch(setUser(JSON.parse(userData)));
                }
            } catch (error) {
                console.error(
                    'Error al recuperar datos de usuario en navigation/MainNav:', error
                );
            }
        };
        fetchUserData();
    }, [dispatch]);

    return (
        <NavigationContainer style={styles.container} >
            {
                user
                    ? <TabNav />
                    : <AuthNav />
            }
        </NavigationContainer>
    )
}

export default MainNav

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
    }
})