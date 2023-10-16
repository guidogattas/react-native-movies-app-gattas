import React, { useState } from 'react';
import { Pressable, StyleSheet, View, TextInput, FlatList, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const Search = () => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer tu_api_key'
        }
    };

    const performSearch = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=es-ES&page=1`, options);
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

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setQuery}
                    value={query}
                    placeholder="Buscar película..."
                />

                <Pressable
                    onPress={performSearch}
                >
                    <AntDesign name="search1" size={24} color={colors.orange} />
                </Pressable>

                <Pressable
                    onPress={clearText}
                >
                    <AntDesign name="close" size={24} color={colors.orange} />
                </Pressable>
            </View>

            <FlatList
                data={searchResults}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.resultItem}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.overview}>{item.overview}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.heavyBlue,
        flex: 1,
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

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.orange
    },
    overview: {
        fontSize: 16,
    }
});

export default Search;
