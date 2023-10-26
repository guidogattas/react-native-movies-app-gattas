import React from 'react';
import { StyleSheet, View, TextInput, FlatList, Text, Dimensions } from 'react-native';
import { colors } from '../theme/colors';
import { accessTokenAuth } from '../utils/apiKey';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchResults } from '../redux/slice/searchSlice';
import Header from './Header';
import GenreList from './GenreList';


const { width, height } = Dimensions.get('window');


const Search = () => {

    // Creamos la variable searchResults para ver si es mayor a 0 su length, que nos muestre los resultados de la búsqueda, y en caso de no ser mayor a 0, mostramos los géneros de las películas, para poder navegar en ellos.

    const searchResults = useSelector((state) => state.searchSlice.searchResults);
    const dispatch = useDispatch();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessTokenAuth}`
        }
    };

    // Creamos la función asíncrona para la búsqueda de películas, le pasamos por parámetro la query, que se lo vamos a pasar por el valor del onChangeText del TextInput, y ese resultado lo vamos a pasar por dispatch a setSearchResults con la data recibida, y es lo que va a hacer que modifique el length de searchResults
    const performSearch = async (query) => {
        try {
            // Si queremos que sea una búsqueda de películas y series hay que cambiar el valor de movie a multi
            const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=es-AR&page=1`, options);
            const data = await response.json();
            dispatch(setSearchResults(data.results));
        } catch (error) {
            console.error(error);
        }
    };


    const navigation = useNavigation();
    const handleClick = (item) => {
        navigation.navigate("movieDetail", item);
    };

    const handleNavigateToGenre = (genre) => {
        navigation.navigate("genreDetail", genre);
    };

    return (
        <View style={styles.container}>
            <Header title='Búsqueda' />
            <TextInput
                style={styles.input}
                onChangeText={(query) => performSearch(query)}
                placeholder="Buscar película"
            />
            {searchResults.length > 0 ?
                <FlatList
                    data={searchResults}
                    keyExtractor={(item) => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
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
                :
                <GenreList handleNavigateToGenre={handleNavigateToGenre} />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor,
        flex: 1
    },

    input: {
        alignSelf: 'center',
        width: '95%',
        borderWidth: 3,
        borderColor: colors.borderSearch,
        borderRadius: 8,
        padding: 10,
        fontSize: 20,
        backgroundColor: colors.searchBackground,
        marginTop: 10,
    },
    resultItem: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.genreItemSearchBackground,
        borderRadius: 8,
        justifyContent: 'center',

    },
    title: {
        fontSize: 30,
        fontFamily: 'JosefinBold',
        marginBottom: 10,
        color: colors.movieTitleFont,
        textAlign: 'center'
    },
    vote: {
        position: 'absolute',
        left: 30,
        top: 10,
        color: colors.voteFont,
        backgroundColor: colors.voteBackground,
        padding: 4,
        borderRadius: 10,
        fontFamily: 'JosefinBold',
        fontSize: 14,

    },
    overview: {
        margin: 10,
        fontSize: 16,
        fontFamily: 'JosefinRegular',
        color: colors.overviewFont,
    }
});

export default Search;
