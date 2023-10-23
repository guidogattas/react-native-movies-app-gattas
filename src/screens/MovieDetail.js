import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons';



// TRAEMOS LOS GÉNEROS Y LOS COMPARAMOS CON LOS QUE TRAEMOS POR PARAMS:

const genres = require('../data/genres.json');
const getGenreNames = (genreIds) => {
    const genreNames = genreIds.map((genreId) => {
        const genre = genres.find((g) => g.id === genreId);
        return genre ? genre.name : "Desconocido";
    });
    return genreNames.join(", ");
};

const MovieDetail = ({ route }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const { name, title, poster_path, overview, vote_average, genre_ids } = route.params

    return (
        <ScrollView style={styles.container} >

            <Text style={styles.title}>{title || name}</Text>
            <View style={styles.favoriteContainer}>
                <Image
                    source={{
                        uri: poster_path !== null
                            ? `https://image.tmdb.org/t/p/original/${poster_path}`
                            : 'https://i.ibb.co/WKtwrKQ/404-Poster-Not-Found-v2.jpg',
                    }}
                    style={{
                        width: 320,
                        height: 400,

                    }}
                    resizeMode="cover"
                />
                <View style={styles.favorite}>
                    {isFavorite ? (
                        <AntDesign name="heart" size={36} color="red" onPress={() => setIsFavorite(false)} />
                    ) : (
                        <AntDesign name="hearto" size={36} color="red" onPress={() => setIsFavorite(true)} />
                    )}
                </View>
            </View>
            <Text style={{ fontFamily: 'JosefinBold', fontSize: 20, marginVertical: 10, color: colors.rateMovieDetail }}>
                PUNTAJE: ⭐{vote_average > 0 ? vote_average.toFixed(2) : 'Sin Calificación'}
            </Text>
            <Text style={{ fontFamily: 'JosefinBold', fontSize: 16, marginVertical: 6, color: colors.genresMovieDetail }}>
                {getGenreNames(genre_ids)}
            </Text>
            <Text style={styles.overview}>{overview}</Text>


        </ScrollView >
    )
}

export default MovieDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        paddingHorizontal: 10,
    },
    title: {
        fontFamily: 'JosefinBold',
        color: colors.headerMovieDetail,
        marginVertical: 20,
        fontSize: 40,
    },
    favoriteContainer: {
        width: 300,
        height: 400,
    },
    favorite: {
        position: 'absolute',
        right: 2,
        top: 10,
        backgroundColor: 'rgba(05, 0, 0, 0.3)',
        borderRadius: 50,
        padding: 10,
    },
    overview: {
        fontFamily: 'JosefinRegular',
        color: colors.textMovieDetail,
        fontSize: 20,
        marginBottom: 20,
    }

})