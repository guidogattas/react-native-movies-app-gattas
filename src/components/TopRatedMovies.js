import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopRatedMovies } from '../utils/moviesApi'
import { setTopRatedMovies } from '../redux/slice/homeSlice'
import { ActivityIndicator } from 'react-native-web'
import ScreenList from './ScreenList'



const TopRatedMovies = () => {

    const topRatedMovies = useSelector((state) => state.homeSlice.topRatedMovies)
    const dispatch = useDispatch()

    const fetchTRMovies = async () => {
        try {
            const topRatedData = await fetchTopRatedMovies();
            const randomizedResults = topRatedData.results.sort(() => Math.random() - 0.5)

            dispatch(setTopRatedMovies(randomizedResults));
        } catch (error) {
            console.error(`Error en TopRatedMovies.js ${error}`);
        }
    }

    useEffect(() => {
        fetchTRMovies()
    }, [])


    return (
        <View style={styles.container}>
            {!topRatedMovies ? (
                <View>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            )
                : (
                    <ScreenList title={'MEJORES CALIFICADAS'} data={topRatedMovies} />
                )}
        </View>
    );
};

export default TopRatedMovies

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});