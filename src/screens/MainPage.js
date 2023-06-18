import { StyleSheet, View } from "react-native";
import React from 'react';
import Menu from "../component/Menu"
import Status from "../component/Status";

const MainPage = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Status/>
      </View>

      <View style={styles.menuStyle}>
        <Menu />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    backgroundColor: '#292928'
  },

  homeTop: {
    paddingHorizontal: 10,
  },
});
export default MainPage;
