import React from 'react'
import { StyleSheet, View, ActivityIndicator, } from 'react-native';
import { fetchTrendingMovies } from '../utils/moviesApi';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTrendingMovies } from '../redux/slice/homeSlice';
import ScreenList from './ScreenList';

const TrendingMovies = () => {

    const trendingMovies = useSelector((state) => state.homeSlice.trendingMovies)
    const dispatch = useDispatch()
    const fetchTrendMovies = async () => {
        try {
            const trendingData = await fetchTrendingMovies();
            const randomizedResults = trendingData.results.sort(() => Math.random() - 0.5)
            dispatch(setTrendingMovies(randomizedResults));;
        } catch (error) {
            console.error('Error en TrendingMovies.js', error);
        }
    };

    useEffect(() => {
        fetchTrendMovies();
    }, []);



    return (
        <View style={styles.container}>
            {!trendingMovies ? (
                <View>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            )
                : (
                    <ScreenList title={'PELÍCULAS TENDENCIAS'} data={trendingMovies} />
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