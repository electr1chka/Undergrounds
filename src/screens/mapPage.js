import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const MapPage = () => {
  return (
    <View style={styles.container}>
      <Image
          style={styles.mapPicture}
          //resizeMode="contain"
          source={require("../../assets/map.jpg")}
          
        />
    </View>
  )
}

const styles = StyleSheet.create({
  mapPicture: {
    alignContent: 'center',
    backgroundColor: 'white',
    resizeMode: "stretch",
    width: 375,
    height: 605,
    
  },

  container: {
    paddingTop: 0,
  }
})
export default MapPage

