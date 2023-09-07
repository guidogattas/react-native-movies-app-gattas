import { View, Text, StyleSheet } from 'react-native'
import {colors} from '../theme/colors'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
          <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        height: 85,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.lightBlue
        },
    headerText: {
        fontSize: 25,
        fontWeight: "600",
        marginTop: 30,
        color: colors.heavyBlue,
    }

})

export default Header