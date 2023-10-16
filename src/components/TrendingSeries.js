import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTrendingSeries } from '../redux/slice/homeSlice';
import { fetchTrendingSeries } from '../utils/moviesApi';
import ScreenList from './ScreenList';




const TrendingSeries = () => {

    const trendingSeries = useSelector((state) => state.homeSlice.trendingSeries)
    const dispatch = useDispatch()

    const fetchTrendSeries = async () => {
        try {
            const trendingData = await fetchTrendingSeries();
            const randomizedResults = trendingData.results.sort(() => Math.random() - 0.5)
            dispatch(setTrendingSeries(randomizedResults));
        } catch (error) {
            console.error(`Error en TrendingSeries.js ${error}`);
        }
    };

    useEffect(() => {
        fetchTrendSeries();
    }, []);




    return (
        <View style={styles.container}>
            {!trendingSeries ? (
                <View>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            )
                : (
                    <ScreenList title={'SERIES TENDENCIAS'} data={trendingSeries} />
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