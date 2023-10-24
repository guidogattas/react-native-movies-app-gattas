import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetFavoritesQuery } from '../services/ecApi'

const FavoritesMovies = () => {
    const uid = useSelector((state) => state.authSlice.uid)
    const { data, isLoading, refetch } = useGetFavoritesQuery(uid)

    // UseEffect para volver a consultar los favoritos cuando cambia el UID
    useEffect(() => {
        refetch()
    }, [uid])

    console.log(data)

    return (
        <View>
            <Text style={{ color: 'white' }}>FavoritesMovies</Text>
        </View>
    )
}

export default FavoritesMovies

const styles = StyleSheet.create({})
