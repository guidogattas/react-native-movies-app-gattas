import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Header from '../components/Header';
import Search from '../components/Search';
import { colors } from '../theme/colors';

const SearchScreen = () => {


    return (
        <View style={styles.container}>
            <Header title={'Búsqueda'} />
            <Search />


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.heavyBlue
    }
});

export default SearchScreen;
