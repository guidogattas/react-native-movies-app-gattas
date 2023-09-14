import { Button, Image, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { products } from '../data/products'
import React from 'react'

const ProductDetail = () => {
    const initialProd = products[0]
    console.log(initialProd.images[0])

    return (
        <SafeAreaView >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{
                        uri: initialProd.images[2],
                    }
                    }
                />
                <Text style={styles.textTitle} > Título: {initialProd.title}</Text>
                <Text style={styles.text}> Descripción: {initialProd.description}</Text>
                <Text style={styles.text}> Precio: ${initialProd.price}</Text>
            </View>
            <Button
                title="Agregar al Carrito" color={"green"} onPress={() => { console.log("Botón Test") }}
                />
            <Text style={styles.text}> ⭐Rating: {initialProd.rating}</Text>
        </SafeAreaView>
    )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        height: 300,
        width: "100%",
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