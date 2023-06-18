import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Call from '../component/Call'

const AboutPage = () => {
  return (
    <View style={styles.mainContainer}>
      <Call></Call>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
    backgroundColor: '#292928'
  },
});

export default AboutPage

