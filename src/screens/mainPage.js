import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from 'react';
import Menu from "../component/menu"
import Status from "../component/Status";
import Groups from "../component/Groups";

const MainPage = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Status/>
        <Groups/>
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