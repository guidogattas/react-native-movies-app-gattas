import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const ProductItem = ({ item }) => {
    return (
        <View style={styles.container}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text}>{`$${item.price}`}</Text>
                <Image
                    style={styles.image}
                    height={50}
                    width={50}
                    source={{ uri: item.images[0] }}
                />
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: colors.mediumBlue,
        borderRadius: 10,
        borderWidth: 2,
        height: 100,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        resizeMode: 'cover',
        flex: 1,

    },

    text: {
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 10,
    },
    image: {
        marginRight: 20,
        resizeMode: 'contain',
        marginVertical: 10,
    }

})