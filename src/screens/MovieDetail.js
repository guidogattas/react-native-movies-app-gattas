import { StyleSheet, Text, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { colors } from '../theme/colors'
import { View } from 'react-native'
import { GenreList, fetchTrendingSeries } from '../utils/moviesApi'

const { movieGenres, tvGenres } = GenreList();

console.log(movieGenres, tvGenres);


const MovieDetail = ({ route }) => {


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGE0MWZlNDEyMGE4OGVkNzEyNDBmYmU2YjhkMDNhZiIsInN1YiI6IjY1MGEwMDJlNmMxOWVhMDBlYmExNmQ2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dX9MHsnmlIGLyy5S3qKcrfEQUhA2i3ZfVc2oLbWxFm8'
        }
    };

    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(response => response.json())
        .then(response => console.log(response.genres))
        .catch(err => console.error(err));





    const { name, title, poster_path, overview, vote_average } = route.params

    return (
        <ScrollView style={styles.container} >

            <Text style={styles.title}>{title || name}</Text>
            <Image
                source={{
                    uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
                }}
                style={{
                    width: 300,
                    height: 400,

                }}
                resizeMode="cover"
            />
            <Text style={{ fontFamily: 'JosefinBold', fontSize: 20, marginVertical: 10 }}>PUNTAJE: ⭐{vote_average.toFixed(2)}</Text>
            <Text style={styles.overview}>{overview}</Text>


        </ScrollView >
    )
}

export default MovieDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.orange,
        paddingHorizontal: 10,


    },
    title: {
        fontFamily: 'JosefinBold',
        marginBottom: 20,
        fontSize: 40,
    },
    overview: {
        fontFamily: 'JosefinRegular',
        fontSize: 20,
        marginBottom: 20,
    }

})