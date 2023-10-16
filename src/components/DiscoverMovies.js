import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fetchDiscoverMovies } from '../utils/moviesApi'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import ScreenList from './ScreenList';
import { setDiscoverMovies } from '../redux/slice/homeSlice';
import { useState } from 'react';

const DiscoverMovies = () => {

    const [loading, setLoading] = useState(true)

    const discoveredMovies = useSelector((state) => state.homeSlice.discoverMovies)
    const dispatch = useDispatch()

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


    useEffect(() => {
        fetchDiscMovies()
    }, [])


    return (
        <View style={styles.container}>
            {loading ? (
                <View>
                    <ActivityIndicator size="large" color="#00ff00" />
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