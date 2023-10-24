import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { getDatabase, ref, set, get } from 'firebase/database';
import { colors } from '../theme/colors';
import { useSelector } from 'react-redux';

// TRAEMOS LOS GÉNEROS Y LOS COMPARAMOS CON LOS QUE TRAEMOS POR PARAMS PARA MOSTRAR LOS GÉNEROS DE LA PELÍCULA:
const genres = require('../data/genres.json');
const getGenreNames = (genreIds) => {
    const genreNames = genreIds.map((genreId) => {
        const genre = genres.find((g) => g.id === genreId);
        return genre ? genre.name : 'Desconocido';
    });
    return genreNames.join(', ');
};

const MovieDetail = ({ route }) => {
    const database = getDatabase();
    const uid = useSelector((state) => state.authSlice.uid);
    console.log(uid)



    const [isFavorite, setIsFavorite] = useState(false);
    const { name, title, poster_path, overview, vote_average, genre_ids, id } = route.params;

    // Función para obtener el estado actual de favorito desde la base de datos
    const fetchFavoriteStatus = async () => {
        const userFavoriteRef = ref(database, `users/${uid}/favorites/${id}`);
        try {
            const snapshot = await get(userFavoriteRef);
            setIsFavorite(snapshot.exists());
        } catch (error) {
            console.error('Error al obtener el estado de favorito:', error);
        }
    };

    // Cargar el estado de favorito al cargar la pantalla
    useEffect(() => {
        fetchFavoriteStatus();
    }, []);

    const toggleFavorite = async () => {
        const userFavoriteRef = ref(database, `users/${uid}/favorites/${id}`);
        try {
            if (isFavorite) {
                await set(userFavoriteRef, null);
            } else {
                await set(userFavoriteRef, id);
            }
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error('Error al cambiar el estado de favorito:', error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{title || name}</Text>
            <View style={styles.favoriteContainer}>
                <Image
                    source={{
                        uri:
                            poster_path !== null
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
                    <TouchableOpacity onPress={toggleFavorite}>
                        <AntDesign
                            name={isFavorite ? 'heart' : 'hearto'}
                            size={36}
                            color="red"
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ fontFamily: 'JosefinBold', fontSize: 20, marginVertical: 10, color: colors.rateMovieDetail }}>
                PUNTAJE: ⭐{vote_average > 0 ? vote_average.toFixed(2) : 'Sin Calificación'}
            </Text>
            <Text style={{ fontFamily: 'JosefinBold', fontSize: 16, marginVertical: 6, color: colors.genresMovieDetail }}>
                {getGenreNames(genre_ids)}
            </Text>
            <Text style={styles.overview}>{overview}</Text>
        </ScrollView>
    );
};

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
    },
});

export default MovieDetail;
