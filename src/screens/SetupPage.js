import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Groups from "../component/Groups";
import Audience from "../component/Audience";

const SetupPage = () => {
  return (
    <View style={styles.mainContainer}>
      <Groups/>
      <Audience/>
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
export default SetupPage

