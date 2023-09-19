import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { useWindowDimensions } from 'react-native'

const ProductItem = ({ item, navigation }) => {
    const { width } = useWindowDimensions()

    return (
        <View>
            <Pressable
                style={styles.container}
                onPress={() => navigation.navigate('productDetail', { selectedItem: item })}
            >
                <Image
                    style={styles.image}
                    source={{ uri: item.images[0] }}
                />
                <View style={styles.textContainer}>
                    <Text
                        style={width < 300 ? styles.textMin : styles.text}
                    >
                        {item.title}
                    </Text>
                    <Text style={styles.text}>{`$${item.price}`}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: colors.white,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.mediumGreen,
        padding: 10,
        elevation: 3,
    },
    textContainer: {
        marginLeft: 10,
    },
    text: {
        fontFamily: 'JosefinRegular',
        fontSize: 16,
        textTransform: 'capitalize',
        color: colors.heavyBlue,
    },
    textMin: {
        fontSize: 12,
        color: colors.mediumGray,
    },
    image: {
        height: 80,
        width: 80,
        marginRight: 10,
        borderRadius: 5,
        resizeMode: 'contain',
    },
});