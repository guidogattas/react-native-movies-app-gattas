import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { FlatList } from 'react-native';

const GenreList = ({ handleNavigateToGenre }) => {

    const genres = require('../data/genres.json');
    return (
        <FlatList
            style={{ marginTop: 20 }}
            data={genres}
            keyExtractor={(genre) => genre.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity
                    key={item.id}
                    onPress={() => handleNavigateToGenre(item)}
                    style={styles.button}
                >
                    <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />

    );
};

export default GenreList;

const styles = StyleSheet.create({
    text: {
        color: colors.genreButtonFont,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'JosefinBold',
    },
    button: {
        backgroundColor: colors.genreButtonBackground,
        borderRadius: 8,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        marginHorizontal: 50,
    }

})