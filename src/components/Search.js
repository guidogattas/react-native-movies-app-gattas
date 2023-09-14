import React, { useState } from 'react'
import { Pressable, StyleSheet, View, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const Search = ({text, setText}) => {


    const onHandleText = (value) => { setText(value) }
    const clearText = () => {
        setText('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={onHandleText}
                    value={text}
                    placeholder="Buscar producto..."
                />

                <Pressable onPress={() => { console.log("Aprete") }}>
                    <AntDesign name="close" size={24} color="black" onPress={clearText}/>
                </Pressable>
            </View>
        </View >
    )
}

export default Search

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.lime,
        height: 100,
        justifyContent: 'center',

    },

    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    input: {
        width: '88%',
        borderWidth: 3,
        borderColor: colors.lightBlue,
        borderRadius: 8,
        padding: 10,
        fontSize: 20,
        backgroundColor: colors.white,
    }

})