import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../theme/colors'
import React from 'react'

const Header = ({ title }) => {
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
    justifyContent: "flex-end",
    backgroundColor: colors.darkGray,
  },
  headerText: {
    fontFamily: 'JosefinBold',
    fontSize: 24,
    fontWeight: "600",
    color: colors.orange,
    marginBottom: 10,
  }


})

export default Header