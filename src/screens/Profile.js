import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { Entypo, Feather } from '@expo/vector-icons';

const Profile = () => {
    return (
        <View style={styles.container}>

            <Header title='Mi Perfil' />
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: "https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg" }}
                />
            </View>
            <Pressable>
                <Entypo name="camera" size={40} color="black" />
            </Pressable>
            <Pressable>
                <Feather name="map-pin" size={40} color="black" />
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 40,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    }
})

export default Profile
