import React, { useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../redux/slice/authSlice';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import { colors } from '../theme/colors';
import { getDatabase, ref, get, set } from 'firebase/database';

const database = getDatabase();

const Profile = () => {
    const defaultImage = "https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg";
    const dispatch = useDispatch();
    const uid = useSelector((state) => state.authSlice.uid);
    const [userImage, setUserImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const onLogout = () => {
        Alert.alert('Cerrar sesión', '¿Estás seguro que deseas cerrar sesión?', [
            {
                text: 'No',
                style: 'cancel',
            },
            { text: 'Si', onPress: () => dispatch(clearUser()) },
        ]);
    };

    // Función para obtener la imagen de la base de datos. Si existe la pasamos a userImage, si no existe pasamos la imágen por defecto. 
    const fetchImage = async () => {
        try {
            const userImageRef = ref(database, `users/${uid}/image`);
            const snapshot = await get(userImageRef);
            if (snapshot.exists()) {
                const image = snapshot.val();
                setUserImage(image);
            } else {
                setUserImage(defaultImage);
            }
        } catch (error) {
            console.error('Error al obtener la imagen:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchImage();
    }, []);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            base64: true,
        });

        if (!result.canceled) {
            const image = `data:image/jpeg;base64,${result.assets[0].base64}`;
            const userImageRef = ref(database, `users/${uid}/image`);
            set(userImageRef, image)
                .then(() => {
                    fetchImage(); // Actualizar la imagen después de cargarla
                })
                .catch((error) => {
                    console.error('Error al guardar la imagen:', error);
                });
        }
    };

    const openCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("No le has dado permiso a la Aplicación para acceder a tu cámara!");
            return;
        } else {
            const result = await ImagePicker.launchCameraAsync({
                allowsEditing: true,
                aspect: [4, 4],
                base64: true,
                quality: 1,
            });
            if (!result.canceled) {
                const image = `data:image/jpeg;base64,${result.assets[0].base64}`;
                const userImageRef = ref(database, `users/${uid}/image`);
                set(userImageRef, image)
                    .then(() => {
                        fetchImage(); // Actualizar la imagen después de cargarla
                    })
                    .catch((error) => {
                        console.error('Error al guardar la imagen:', error);
                    });
            }
        }
    };

    return (
        <View style={styles.container}>
            <Header title='Mi Perfil' />
            {isLoading ? (
                <ActivityIndicator size="large" color="#00ff00" />
            ) : (
                <>
                    <View>
                        <Image
                            style={styles.image}
                            source={{ uri: userImage ? userImage : defaultImage }}
                        />
                    </View>
                    <View style={styles.pressablesContainer}>
                        <View style={styles.pressableContainer}>
                            <Pressable style={styles.pressableButton} onPress={() => openCamera()}>
                                <Entypo name="camera" size={40} color={colors.profileButton} />
                            </Pressable>
                            <Text style={styles.textPressable}>Abrir Cámara</Text>
                        </View>
                        <View style={styles.pressableContainer}>
                            <Pressable style={styles.pressableButton} onPress={() => pickImage()}>
                                <MaterialIcons name="add-photo-alternate" size={40} color={colors.profileButton} />
                            </Pressable>
                            <Text style={styles.textPressable}>Abrir Galería de Fotos</Text>
                        </View>
                        <View style={styles.pressableLogoutContainer}>
                            <Pressable onPress={onLogout} style={styles.pressableButton}>
                                <MaterialIcons name="logout" size={30} color={colors.profileButton} />
                            </Pressable>
                            <Text style={styles.textPressable}>LOGOUT</Text>
                        </View>
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.backgroundColor,
        flex: 1,
    },
    image: {
        marginTop: 20,
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    textPressable: {
        textAlign: 'center',
        fontFamily: 'JosefinBold',
        fontSize: 16,
        color: colors.profileText,
    },
    pressableContainer: {
        marginVertical: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    pressableButton: {
        marginRight: 10,
    },
    pressableLogoutContainer: {
        flexDirection: 'row',
        marginTop: 80,
        marginLeft: 10,
    },
});

export default Profile;
