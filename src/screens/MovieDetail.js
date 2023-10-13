import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { colors } from '../theme/colors'

const MovieDetail = ({ route }) => {

    const { title, urlPoster, review } = route.params

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Image
                source={{
                    uri: urlPoster,
                }}
                style={{
                    width: 200,
                    height: 300,

                }}
                resizeMode="cover"
            />
            <Text style={styles.review}>{review}</Text>

        </View>
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
    review: {
        fontFamily: 'JosefinRegular',
        fontSize: 20,

    }

})