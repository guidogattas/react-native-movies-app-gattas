import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Header from '../components/Header';
import { usePutImageMutation, useGetImageQuery } from '../services/ecApi';
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/slice/authSlice';
import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { colors } from '../theme/colors';

const Profile = ({ navigation }) => {

    const defaultImage = "https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg";

    const [putImage, result] = usePutImageMutation()
    const { data, isLoading, isError, error, refetch } = useGetImageQuery();
    const [location, setLocation] = useState(null)

    const dispatch = useDispatch()
    const onLogout = () => {
        // Alert.alert('Cerrar sesión', '¿Estás seguro que deseas cerrar sesión?', [
        //     {
        //         text: 'No',
        //         style: 'cancel',
        //     },
        //     { text: 'Si', onPress: () => dispatch(clearUser()) },
        // ]);

        dispatch(clearUser())
    }

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            base64: true,
        });

        if (!result.canceled) {
            await putImage({
                image: `data:image/jpeg;base64,${result.assets[0].base64}`,
            });
            refetch();
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
                await putImage({
                    image: `data:image/jpeg;base64,${result.assets[0].base64}`,
                });
                refetch();
            }
        }
    };
    const getCoords = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permiso denegado');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        navigation.navigate('mapaLoc', { location })
    }

    return (
        <View style={styles.container}>
            <Header title='Mi Perfil' />
            {isLoading
                ? <ActivityIndicator size="large" color="#00ff00" />
                :
                <>
                    <View>
                        <Image
                            style={styles.image}
                            source={{ uri: data ? data.image : defaultImage }}
                        />
                    </View>
                    <View style={styles.pressablesContainer}>
                        <View style={styles.pressableContainer}>
                            <Pressable style={styles.pressableButton} onPress={() => openCamera()}>
                                <Entypo name="camera" size={40} color={colors.orange} />
                            </Pressable>
                            <Text style={styles.textPressable}>Abrir Cámara</Text>
                        </View>
                        <View style={styles.pressableContainer}>
                            <Pressable style={styles.pressableButton} onPress={() => pickImage()}>
                                <MaterialIcons name="add-photo-alternate" size={40} color={colors.orange} />
                            </Pressable>
                            <Text style={styles.textPressable}>Abrir Galería de Fotos</Text>
                        </View>
                        <View style={styles.pressableContainer}>
                            <Pressable style={styles.pressableButton}
                                onPress={() => getCoords()}
                            >
                                <Feather name="map-pin" size={40} color={colors.orange} />
                            </Pressable>
                            <Text style={styles.textPressable}>Abrir Mapa</Text>
                        </View>
                        <View style={styles.pressableLogoutContainer}>
                            <Pressable onPress={onLogout} style={styles.pressableButton}>
                                <MaterialIcons name="logout" size={30} color={colors.orange} />
                            </Pressable>
                            <Text style={styles.textPressable}>LOGOUT</Text>
                        </View>
                    </View>
                </>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.heavyBlue,
        flex: 1
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
        color: colors.white
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
        marginTop: 100,
        marginLeft: 10,


    }
});

export default Profile;