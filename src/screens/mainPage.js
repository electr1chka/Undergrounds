import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from 'react';
import Menu from "../component/menu"
import Status from "../component/getInfo";
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown'

const MainPage = (props) => {
  const groups = axios.get('https://my-json-server.typicode.com/electr1chka/fake-api/groups/');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Status></Status>
        
        
        

      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View
          /*style={[
            styles.lineStyle,
            {
              marginVertical: 10,
            },
          ]}*/></View>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
    backgroundColor: '#292928'
  },

  homeTop: {
    // height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
  },

  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
});
export default MainPage;