import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import AuthNav from './AuthNav'
import TabNav from './TabNav'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../redux/slice/authSlice'

/** Componente de navegación principal que gestiona la autenticación y la navegación de la aplicación.*/

const MainNav = () => {


    /**
     * Este componente utiliza `AsyncStorage` para verificar si hay datos de usuario almacenados localmente.
     * Si se encuentran datos de usuario válidos (es decir si user es truthy), el usuario se considera autenticado y se muestra la navegación de pestañas (TabNav).
     * Si no se encuentran datos de usuario, se muestra la navegación de autenticación (para hacer el login o crear el usuario). 
     */

    const dispatch = useDispatch()
    const user = useSelector((state) => state.authSlice.user);


    /**
     * Hook que recupera los datos de usuario almacenados localmente.
     * Si se encuentran datos de usuario, se establece el estado de autenticación.
     * Con esto, si es que hay un userData en el storage, user pasa a ser truthy y nos mostraría
     * la TabNav.
    */
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
    }, []);

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