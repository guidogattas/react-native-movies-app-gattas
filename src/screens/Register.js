import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { colors } from '../theme/colors'

import { firebase_auth } from '../firebase/firebase_auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useAddUserMutation } from '../services/ecApi'



const Register = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [addUser] = useAddUserMutation()

    // FUNCIÓN ASÍNCRONA QUE MANEJA EL REGISTRO DE CREACIÓN DE USUARIO CON EMAIL Y PASSWORD. Vamos a pasar los datos a Realtime Database.
    const handleRegister = async () => {
        try {

            const response = await createUserWithEmailAndPassword(
                firebase_auth,
                email,
                password
            )
            const user = response.user;

            console.log(user)

            await addUser(user);


            navigation.navigate('login')
        } catch (error) {
            console.error('Error en registro: ', error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Registro</Text>
            <TextInput
                placeholder='Email'
                placeholderTextColor={colors.lightPurple}
                value={email}
                onChangeText={(value) => setEmail(value)}
                style={[styles.textInput]}
            />
            <TextInput
                placeholder='Contraseña'
                secureTextEntry
                placeholderTextColor={colors.lightPurple}
                value={password}
                onChangeText={(value) => setPassword(value)}
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.registerButton}
                onPress={handleRegister}>
                <Text style={styles.textRegisterButton}>Registrate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton}
                onPress={() => { navigation.navigate('login') }}>
                <Text style={styles.textRegisterButton}>Iniciá Sesión</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: colors.backgroundColor
    },
    header: {
        fontFamily: 'JosefinBold',
        fontSize: 36,
        marginBottom: 20,
        color: colors.headerNavigationFont
    },
    textInput: {
        marginBottom: 10,
        fontFamily: 'JosefinRegular',
        fontSize: 14,
        borderColor: colors.backgroundColor,
        padding: 10,
        color: colors.white
    },
    registerButton: {
        backgroundColor: colors.lightPurple,
        padding: 20,
        marginTop: 20,
        borderRadius: 20,
    },
    textRegisterButton: {
        fontFamily: 'JosefinRegular',
        fontSize: 18,
    },
    loginButton: {
        backgroundColor: colors.loginBackgroundButton,
        padding: 20,
        marginTop: 40,
        borderRadius: 20,
    }

})

export default Register