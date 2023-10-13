import React, { useState } from 'react'
import { Pressable, StyleSheet, View, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../theme/colors';

const Search = () => {

    const [text, setText] = useState('')
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
                    placeholder="Buscar película..."
                />

                <Pressable>
                    <AntDesign name="close" size={24} color="black" onPress={clearText} />
                </Pressable>
            </View>
        </View >
    )
}

export default Search

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.orange,
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
        borderColor: colors.lightGreen,
        borderRadius: 8,
        padding: 10,
        fontSize: 20,
        backgroundColor: colors.white,
    }

})