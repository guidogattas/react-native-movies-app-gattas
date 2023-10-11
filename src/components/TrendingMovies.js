import React from 'react'
import { useGetMoviesQuery } from '../services/ecApi';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { colors } from '../theme/colors';

const TrendingMovies = () => {

    const { data: movies, isLoading, isError } = useGetMoviesQuery();

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>
        );
    }

    if (isError) {
        return (
            <View>
                <Text>Error al cargar las películas.</Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>TENDENCIA:</Text>
            <View>
                {movies.map((movie) => (
                    <View key={movie.id}>
                        <Text style={styles.movieTitle}>{movie.title}:</Text>
                        <Image
                            source={{ uri: movie.urlPoster }}
                            style={styles.image}
                        />

                    </View>
                ))}
            </View>
        </View>
    )
}

export default TrendingMovies

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    title: {
        color: colors.black,
        fontSize: 20,
        marginBottom: 20,
    },
    movieTitle: {
        color: colors.black,
        fontSize: 20,
        // marginBottom: 20,
    },
    image: {
        height: 200,
        width: 150,
        marginVertical: 10,
    }
});