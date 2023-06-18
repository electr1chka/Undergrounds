import React, {useContext, useEffect, useState} from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { api } from '../service/api';
import {AlarmStateApiDataContext} from "../context/AlarmStateApiDataContext";

const Status = () => {

  const chillMessage = "Вдалого дня!";
  const alarmMessage = "Увага! Повітряна тривога. Зберігайте спокій та пройдіть в укриття!";

  const alarmStateData = useContext(AlarmStateApiDataContext);

  return (
    <View>
      <Image
        style={styles.headerImage}
        source={alarmStateData.status ? require("../../assets/alarm_icon.png") : require("../../assets/chill_icon.png")}
      />
      <View>
        <Text style={styles.message}>{alarmStateData.status ? alarmMessage : chillMessage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    marginTop: 50,
    borderRadius: 20,
  },

  message: {
    display: 'flex',
    color: "white",
    textAlign: 'center',
    fontWeight: 'bold'
  }
});


export default Status;
