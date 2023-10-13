import React from 'react'
import { useGetMoviesQuery } from '../services/ecApi';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { colors } from '../theme/colors';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

const PopularMovies = () => {

    const { data: movies, isLoading, isError } = useGetMoviesQuery();
    console.log(movies)
    const { width, height } = Dimensions.get("window");
    const navigation = useNavigation();
    const handleClick = (item) => {

        navigation.navigate("movieDetail", item);
    };

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            ) : isError ? (
                <View>
                    <Text>Error al cargar las películas.</Text>
                </View>
            ) : (
                <>
                    <Text style={styles.title}>MEJORES RANKEADAS:</Text>
                    <Carousel
                        data={movies}
                        renderItem={({ item }) => (
                            <TouchableWithoutFeedback onPress={() => handleClick(item)}>
                                <Image
                                    source={{
                                        uri: item.urlPoster,
                                    }}
                                    style={{
                                        width: width * 0.8,
                                        height: height * 0.25,
                                    }}
                                    resizeMode="cover"
                                    className="rounded-3xl"
                                />
                            </TouchableWithoutFeedback>
                        )}
                        firstItem={1}
                        inactiveSlideScale={0.86}
                        inactiveSlideOpacity={0.6}
                        sliderWidth={width}
                        itemWidth={width * 0.8}
                        slideStyle={{ display: "flex", alignItems: "center" }}
                    />
                </>
            )}
        </View>
    );
}

export default PopularMovies

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    title: {
        fontFamily: 'JosefinBold',
        color: colors.black,
        fontSize: 20,
        marginBottom: 20,
        marginTop: 20,
        left: 20,
    },
    movieTitle: {
        color: colors.black,
        fontSize: 20,
    },
    image: {
        height: 200,
        width: 150,
        marginVertical: 10,
    }
});