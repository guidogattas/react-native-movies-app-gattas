import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTrendingSeries } from '../redux/slice/homeSlice';
import { fetchTrendingSeries } from '../utils/moviesApi';
import ScreenList from './ScreenList';
import { useState } from 'react';
import { colors } from '../theme/colors';




const TrendingSeries = () => {

    const [loading, setLoading] = useState(true)

    const trendingSeries = useSelector((state) => state.homeSlice.trendingSeries)
    const dispatch = useDispatch()

    /**
     * Función asincrónica para obtener y mostrar los datos de la API. Le pasamos un valor variable, para que no los ordene siempre en el mismo órden, y si actualizamos las muestre diferente.
     * Luego la data que recibimos la pasamos por dispatch al estado de setTrendingSeries.
     */
    const fetchTrendSeries = async () => {
        try {
            const trendingData = await fetchTrendingSeries();
            const randomizedResults = trendingData.results.sort(() => Math.random() - 0.5)
            dispatch(setTrendingSeries(randomizedResults));
            setLoading(false)
        } catch (error) {
            console.error(`Error en TrendingSeries.js ${error}`);
        }
    };

    // Llama a la función de obtención de datos cuando se monta el componente

    useEffect(() => {
        fetchTrendSeries();
    }, []);




    return (
        <View style={styles.container}>
            {loading ? (
                <View>
                    <ActivityIndicator size="large" color={colors.activityIndicator} />
                </View>
            )
                : (
                    <ScreenList title={'SERIES TENDENCIA'} data={trendingSeries} />
                )}
        </View>
    );
};

export default TrendingSeries

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});