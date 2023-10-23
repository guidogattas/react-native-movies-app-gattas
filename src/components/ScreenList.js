import React from 'react';
import { View, Text, Image, FlatList, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { ActivityIndicator } from 'react-native-web';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';



const ScreenList = ({ title, data }) => {
    const { width, height } = Dimensions.get("window");

    const navigation = useNavigation();
    const handleClick = (item) => {
        navigation.navigate("movieDetail", item);
    };





    return (
        <View style={styles.container}>
            {!data ? (
                <View>
                    <ActivityIndicator size="large" color={colors.activityIndicator} />
                </View>
            ) : (
                <>
                    <Text style={styles.title}>{title}</Text>
                    <FlatList
                        horizontal
                        // pagingEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        legacyImplementation={false}
                        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                        data={data}
                        style={{ width: width + 5, height: '100%' }}
                        renderItem={({ item }) => (
                            <TouchableWithoutFeedback onPress={() => handleClick(item)}>
                                <View>
                                    <Image
                                        source={{
                                            uri: item.poster_path !== null
                                                ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                                                : 'https://i.ibb.co/WKtwrKQ/404-Poster-Not-Found-v2.jpg',
                                        }}
                                        style={{
                                            width: width * 0.8,
                                            height: height * 0.25,
                                        }}
                                        resizeMode="cover"
                                        className="rounded-3xl"
                                    />
                                    <Text style={styles.vote}>⭐ {item.vote_average.toFixed(2)}</Text>
                                    <View style={styles.titleOverlay}>
                                        <Text style={styles.titleText}>{item.title || item.name}</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                        firstItem={1}
                        inactiveSlideScale={0.86}
                        inactiveSlideOpacity={0.6}
                        sliderWidth={width}
                        itemWidth={width * 0.8}
                        slideStyle={{ display: "flex", alignItems: "center" }}
                        borderRadius={0}
                    />
                </>
            )}
        </View>
    );
};

export default ScreenList;

const styles = {
    container: {
        flex: 1,
    },
    title: {
        fontFamily: 'JosefinBold',
        color: colors.screenListHome,
        fontSize: 20,
        marginTop: 30,
        marginBottom: 20,
        left: 20,
    },
    vote: {
        position: 'absolute',
        left: 6,
        top: 6,
        color: colors.voteFont,
        backgroundColor: colors.voteBackground,
        padding: 4,
        borderRadius: 10,
        fontFamily: 'JosefinBold',
        fontSize: 14,

    },
    titleOverlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        alignItems: 'center',
    },
    titleText: {
        color: colors.screenListTitleMovie,
        fontSize: 18,
    },
};