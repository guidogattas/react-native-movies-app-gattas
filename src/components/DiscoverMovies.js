import { StyleSheet, View } from 'react-native'
import React from 'react'
import { fetchDiscoverMovies } from '../utils/moviesApi'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import ScreenList from './ScreenList';
import { setDiscoverMovies } from '../redux/slice/homeSlice';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { colors } from '../theme/colors';

const DiscoverMovies = () => {

    const [loading, setLoading] = useState(true)

    const discoveredMovies = useSelector((state) => state.homeSlice.discoverMovies)
    const dispatch = useDispatch()

    /**
    * Función asincrónica para obtener y mostrar los datos de la API. Le pasamos un valor variable, para que no los ordene siempre en el mismo órden, y si actualizamos las muestre diferente.
    * Luego la data que recibimos la pasamos por dispatch al estado de setDiscoverMovies.
    */

    const fetchDiscMovies = async () => {
        try {
            const discoverData = await fetchDiscoverMovies()
            const randomizedResults = discoverData.results.sort(() => Math.random() - 0.5)
            dispatch(setDiscoverMovies(randomizedResults))
            setLoading(false)
        } catch (error) {
            console.error('Error en DiscoverMovies.js ', error)
        }
    }

    // Llama a la función de obtención de datos cuando se monta el componente

    useEffect(() => {
        fetchDiscMovies()
    }, [])


    return (
        <View style={styles.container}>
            {loading ? (
                <View>
                    <ActivityIndicator size="large" color={colors.activityIndicator} />
                </View>
            )
                : (
                    <ScreenList title={'DESCUBRIR'} data={discoveredMovies} />
                )}
        </View>
    );
};

export default DiscoverMovies

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})