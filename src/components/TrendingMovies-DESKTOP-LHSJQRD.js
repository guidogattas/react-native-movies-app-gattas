import React from 'react'
import { StyleSheet, View, ActivityIndicator, } from 'react-native';
import { fetchTrendingMovies } from '../utils/moviesApi';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTrendingMovies } from '../redux/slice/homeSlice';
import ScreenList from './ScreenList';
import { useState } from 'react';
import { colors } from '../theme/colors';

const TrendingMovies = () => {

    const [loading, setLoading] = useState(true)

    const trendingMovies = useSelector((state) => state.homeSlice.trendingMovies)
    const dispatch = useDispatch()

    /**
    * Función asincrónica para obtener y mostrar los datos de la API. Le pasamos un valor variable, para que no los ordene siempre en el mismo órden, y si actualizamos las muestre diferente.
    * Luego la data que recibimos la pasamos por dispatch al estado de setTrendingMovies.
    */
    const fetchTrendMovies = async () => {
        try {
            const trendingData = await fetchTrendingMovies();
            const randomizedResults = trendingData.results.sort(() => Math.random() - 0.5)
            dispatch(setTrendingMovies(randomizedResults));
            setLoading(false)
        } catch (error) {
            console.error('Error en TrendingMovies.js', error);
        }
    };

    // Llama a la función de obtención de datos cuando se monta el componente

    useEffect(() => {
        fetchTrendMovies();
    }, []);



    return (
        <View style={styles.container}>
            {loading ? (
                <View>
                    <ActivityIndicator size="large" color={colors.activityIndicator} />
                </View>
            )
                : (
                    <ScreenList title={'PELÍCULAS TENDENCIA'} data={trendingMovies} />
                )}
        </View>
    );
};

export default TrendingMovies

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});