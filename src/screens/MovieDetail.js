import { StyleSheet, Text, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons';





const MovieDetail = ({ route }) => {

    const [isFavorite, setIsFavorite] = useState(false)
    const { name, title, poster_path, overview, vote_average } = route.params

    return (
        <ScrollView style={styles.container} >

            <Text style={styles.title}>{title || name}</Text>
            <View style={styles.favoriteContainer}>
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
                <View style={styles.favorite}>
                    {isFavorite ? (
                        <AntDesign name="heart" size={50} color="red" onPress={() => setIsFavorite(false)} />
                    ) : (
                        <AntDesign name="hearto" size={50} color="red" onPress={() => setIsFavorite(true)} />
                    )}
                </View>
            </View>
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
    favoriteContainer: {
        width: 300,
        height: 400,
    },
    favorite: {
        position: 'absolute',
        right: 10,
        top: 10,
        backgroundColor: 'rgba(05, 0, 0, 0.3)',
        borderRadius: 50,
        padding: 10,
    }, overview: {
        fontFamily: 'JosefinRegular',
        fontSize: 20,
        marginBottom: 20,
    }

})