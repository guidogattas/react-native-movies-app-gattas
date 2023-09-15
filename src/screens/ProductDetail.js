import { Button, Image, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';


const ProductDetail = ({route}) => {
    const selectedItem = route.params.selectedItem;

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.view} >
                <Image
                    style={styles.image}
                    source={{
                        uri: selectedItem.images[0],
                    }
                    }
                />
                <Text style={styles.textTitle} > Título: {selectedItem.title}</Text>
                <Text style={styles.text}> Descripción: {selectedItem.description}</Text>
                <Text style={styles.text}> Precio: ${selectedItem.price}</Text>
            </View>
            <Button
                title="Agregar al Carrito" color={"green"} onPress={() => { console.log("Botón Test") }}
                />
            <Text style={styles.text}> ⭐Rating: {selectedItem.rating}</Text>
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
        resizeMode:'contain',
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