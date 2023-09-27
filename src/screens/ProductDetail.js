import { Button, Image, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { useSelector } from 'react-redux';


const ProductDetail = () => {
    const productSelected = useSelector(
        (state) => state.homeSlice.productSelected
    );

    const item = productSelected;

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.view} >
                <Image
                    style={styles.image}
                    source={{
                        uri: item.images[0],
                    }
                    }
                />
                <Text style={styles.textTitle} > Título: {item.title}</Text>
                <Text style={styles.text}> Descripción: {item.description}</Text>
                <Text style={styles.text}> Precio: ${item.price}</Text>
            </View>
            <Button
                title="Agregar al Carrito" color={"green"} onPress={() => { console.log("Botón Test") }}
            />
            <Text style={styles.text}> ⭐Rating: {item.rating}</Text>
        </SafeAreaView>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    view: {
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    image: {
        height: 300,
        width: "100%",
        resizeMode: 'contain',
    },
    textTitle: {
        fontFamily: 'JosefinBold',
        fontSize: 30,
        marginBottom: 30,
    },
    text: {
        fontFamily: 'JosefinRegular',
        fontSize: 20,
        textAlign: 'center',
        display: "flex",
        marginBottom: 14,
    },
})