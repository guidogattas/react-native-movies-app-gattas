import { StyleSheet, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import Header from '../components/Header';

const MapaLoc = ({ route }) => {

    const { location } = route.params

    return (
        <View style={styles.container}>
            <Header title='Mi Ubicación' />
            <MapView
                pointerEvents={true}
                showsUserLocation={true}
                region={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                }}

                style={styles.map} />
        </View>
    )
}

export default MapaLoc

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});