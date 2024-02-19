import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, StyleSheet, Image, Dimensions } from 'react-native';
import { apiKeyAuth } from '../utils/apiKey';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../components/Header';
import { colors } from '../theme/colors';


const GenreDetail = ({ route }) => {
    const [movies, setMovies] = useState([]);

    const { id, name } = route.params

    const { width, height } = Dimensions.get('window');

    const navigation = useNavigation();
    const handleClick = (item) => {
        navigation.navigate("movieDetail", item);
    };


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
        },
    };

    const performSearch = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${apiKeyAuth}&language=es-AR&sort_by=release_date.desc&page=1&with_genres=${id}`,
                options
            );
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        performSearch();
    }, []);

    return (
        <View style={styles.container}>
            {/* <Header title={name} /> */}
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
                        <View style={styles.resultItem}>
                            <Text style={styles.title}>{item.title}</Text>
                            <View style={{ position: 'relative' }}>

                                {<Image
                                    source={{
                                        uri: item.poster_path !== null
                                            ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                                            : 'https://i.ibb.co/WKtwrKQ/404-Poster-Not-Found-v2.jpg',
                                    }}
                                    style={{
                                        width: width * 0.8,
                                        height: height * 0.5,
                                        alignSelf: 'center'
                                    }}
                                    resizeMode="cover"
                                    className="rounded-3xl"
                                />}

                                <Text style={styles.vote}>⭐
                                    {item.vote_average > 0 ? item.vote_average.toFixed(2) : 'Sin Calificación'}
                                </Text>
                            </View>
                            <Text style={styles.overview}>{item.overview}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.heavyBlue,
        flex: 1
    },

    input: {
        alignSelf: 'center',
        width: '95%',
        borderWidth: 3,
        borderColor: colors.lightOrange,
        borderRadius: 8,
        padding: 10,
        fontSize: 20,
        backgroundColor: colors.white,
        marginTop: 10,
    },
    resultItem: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.lightOrange,
        borderRadius: 8,
        justifyContent: 'center'

    },
    title: {
        fontSize: 30,
        fontFamily: 'JosefinBold',
        marginBottom: 10,
        color: colors.orange,
        textAlign: 'center'
    },
    vote: {
        position: 'absolute',
        left: 30,
        top: 10,
        color: colors.black,
        backgroundColor: colors.lightOrange,
        padding: 4,
        borderRadius: 10,
        fontFamily: 'JosefinBold',
        fontSize: 14,

    },
    overview: {
        margin: 10,
        fontSize: 16,
        fontFamily: 'JosefinRegular',
        color: colors.white,
    }
});
export default GenreDetail;
