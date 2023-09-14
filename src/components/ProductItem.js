import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import { useWindowDimensions } from 'react-native'

const ProductItem = ({ item, navigation }) => {
    const { height, width } = useWindowDimensions()

    return (
        <View style={styles.container}>
            <Pressable onPress={()=>navigation.navigate('productDetail')}>

                <Text style={width < 300 ? styles.textMin : styles.text}>{item.title}</Text>

                <Text style={styles.text}>{`$${item.price}`}</Text>
            </Pressable>
            <Image
                style={styles.image}
                height={50}
                width={50}
                source={{ uri: item.images[0] }}
                resizeMode="cover"
            />
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: colors.violet,
        borderRadius: 10,
        borderWidth: 2,
        height: 100,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'JosefinRegular',
        fontSize: 16,
        marginLeft: 10,
        textTransform: 'capitalize',
    },
    textMin: {
        fontSize: 10,
    },
    image: {
        marginRight: 20,
    }

})