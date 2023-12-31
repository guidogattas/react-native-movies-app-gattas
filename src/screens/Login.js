import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { colors } from '../theme/colors'
import { Pressable } from 'react-native'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebase_auth } from '../firebase/firebase_auth'
import { useDispatch } from 'react-redux'
import { setIdToken, setUser, setUid } from '../redux/slice/authSlice'



const Login = ({ navigation }) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    /**
     * Función asíncrona para loguearnos, esperamos la respuesta de Firebase, pasándo el auth, email y pass
     * Pasamos por dispatch el estado del usuario, el idToken y el uid al authSlice.js
    */

    const handleLogin = async () => {
        try {
            const response = await signInWithEmailAndPassword(firebase_auth, email, password)
            dispatch(setUser(response.user.email));
            dispatch(setIdToken(response._tokenResponse.idToken));
            dispatch(setUid(response.user.uid));

        } catch (error) {
            console.error("Error en screens/Login.js: ", error)
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Iniciá Sesión</Text>
            <TextInput
                placeholder='Email'
                placeholderTextColor={colors.lightPurple}
                value={email}
                onChangeText={(value) => setEmail(value)}
                style={styles.textInput}
            />
            <TextInput
                placeholder='Contraseña'
                secureTextEntry
                placeholderTextColor={colors.lightPurple}
                value={password}
                onChangeText={(value) => setPassword(value)}
                style={styles.textInput}
            />
            <Pressable style={styles.loginButton}
                onPress={handleLogin}>
                <Text style={styles.textLoginButton}>Login</Text>
            </Pressable>
            <Pressable style={styles.registerButton}
                onPress={() => navigation.navigate('register')}>
                <Text style={styles.textRegisterButton}>¿No tenés cuenta?, Presioná aquí</Text>
            </Pressable>
        </View>
    )
}

export default Login

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
    loginButton: {
        backgroundColor: colors.loginBackgroundButton,
        padding: 20,
        marginTop: 20,
        borderRadius: 20,
        textAlign: 'center'

    },
    textLoginButton: {
        fontFamily: 'JosefinRegular',
        fontSize: 18,
    },
    textInput: {
        marginBottom: 10,
        fontFamily: 'JosefinRegular',
        fontSize: 14,
        padding: 10,
        color: colors.textinput
    },
    textRegisterButton: {
        marginTop: 20,
        fontFamily: 'JosefinRegular',
        fontSize: 16,
        color: colors.textinput
    }
})