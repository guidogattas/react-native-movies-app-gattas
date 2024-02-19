import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopRatedMovies } from '../utils/moviesApi'
import { setTopRatedMovies } from '../redux/slice/homeSlice'
import { ActivityIndicator } from 'react-native-web'
import ScreenList from './ScreenList'
import { colors } from '../theme/colors'



const TopRatedMovies = () => {

    const topRatedMovies = useSelector((state) => state.homeSlice.topRatedMovies)
    const dispatch = useDispatch()

    /**
     * Función asincrónica para obtener y mostrar los datos de la API. Le pasamos un valor variable, para que no los ordene siempre en el mismo órden, y si actualizamos las muestre diferente.
    * Luego la data que recibimos la pasamos por dispatch al estado de setTopRatedMovies.
    */

    const fetchTRMovies = async () => {
        try {
            const topRatedData = await fetchTopRatedMovies();
            const randomizedResults = topRatedData.results.sort(() => Math.random() - 0.5)

            dispatch(setTopRatedMovies(randomizedResults));
        } catch (error) {
            console.error(`Error en TopRatedMovies.js ${error}`);
        }
    }

    // Llama a la función de obtención de datos cuando se monta el componente

    useEffect(() => {
        fetchTRMovies()
    }, [])


    return (
        <View style={styles.container}>
            {!topRatedMovies ? (
                <View>
                    <ActivityIndicator size="large" color={colors.activityIndicator} />
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