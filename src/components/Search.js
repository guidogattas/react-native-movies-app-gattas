import React, { useState } from 'react';
import { Pressable, StyleSheet, View, TextInput, FlatList, Text, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { accessTokenAuth } from '../utils/apiKey';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native';

const { width, height } = Dimensions.get('window');


const Search = () => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessTokenAuth}`
        }
    };
    const performSearch = async (query) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=es-AR&page=1`, options);
            const data = await response.json();
            setSearchResults(data.results);
        } catch (error) {
            console.error(error);
        }
    };
    const clearText = () => {
        setQuery('');
        setSearchResults([]);
    };

    const navigation = useNavigation();
    const handleClick = (item) => {
        navigation.navigate("movieDetail", item);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(query) => performSearch(query)}
                    placeholder="Buscar película o serie..."
                />

                <Pressable
                    onPress={clearText}
                >
                    <AntDesign name="close" size={24} color={colors.orange} />
                </Pressable>
            </View>

            <FlatList
                data={searchResults}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
                        <View style={styles.resultItem}>
                            <Text style={styles.title}>{item.title}</Text>
                            <View style={{ position: 'relative' }}>
                                <Image
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
                                />

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
        flex: 1,
        marginTop: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    input: {
        width: '80%',
        borderWidth: 3,
        borderColor: colors.lightOrange,
        borderRadius: 8,
        padding: 10,
        fontSize: 20,
        backgroundColor: colors.white,
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

export default Search;
