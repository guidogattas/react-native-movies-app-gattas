import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNav from './AuthNav';
import TabNav from './TabNav';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUid, setUser } from '../redux/slice/authSlice';

const MainNav = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.authSlice.user);
    const uid = useSelector((state) => state.authSlice.uid);
    const [isLoading, setIsLoading] = useState(true);


    // Cuando se monta el componente corroboramos si hay un usuario logueado en el storage, si es así, lo guardamos en redux, sino nos va a llevar al AuthNav

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await AsyncStorage.getItem('userData');
                const uid = await AsyncStorage.getItem('uid');

                if (userData) {
                    dispatch(setUser(JSON.parse(userData)));
                    dispatch(setUid(JSON.parse(uid)));
                }
            } catch (error) {
                console.error('Error al recuperar datos de usuario en navigation/MainNav:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUserData();
    }, []);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <NavigationContainer style={styles.container}>
            {user ? <TabNav /> : <AuthNav />}
        </NavigationContainer>
    );
};

export default MainNav;

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
    },
});
