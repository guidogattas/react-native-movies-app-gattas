import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetFavoritesQuery } from '../services/ecApi';
import { accessTokenAuth } from '../utils/apiKey';
import ScreenList from './ScreenList';

const FavoritesMovies = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessTokenAuth}`
        }
    };

    const uid = useSelector((state) => state.authSlice.uid);
    const { data: favoriteMoviesData, isLoading, refetch } = useGetFavoritesQuery(uid);
    const [favoriteMoviesDetails, setFavoriteMoviesDetails] = useState([]);
    const [loadingData, setLoadingData] = useState(true);


    useEffect(() => {
        const fetchFavoritesDetails = async () => {
            if (favoriteMoviesData) {
                const details = [];

                // el Object.values devuelve un array con los valores de un objeto, en este caso cada id de favoritos de Firebase. Por cada id, vamos a hacer una petición a la API de TMDB para obtener los datos de la película.

                for (const id of Object.values(favoriteMoviesData)) {
                    try {
                        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-AR`, options);
                        if (!response.ok) {
                            throw new Error(`Error en moviesApi.js fetchFavoritesMovies Status: ${response.status}`);
                        }
                        const data = await response.json();
                        details.push(data);
                    } catch (error) {
                        console.error(error);
                    }
                }

                setFavoriteMoviesDetails(details);
                setLoadingData(false);
            }
        };
        fetchFavoritesDetails();
    }, [favoriteMoviesData]);

    return (
        <View style={styles.container}>
            {favoriteMoviesData ? (
                loadingData ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <ScreenList
                        title='FAVORITAS' data={favoriteMoviesDetails}
                    />
                )
            ) : null}
        </View>
    );
};

export default FavoritesMovies;

const styles = StyleSheet.create({});
