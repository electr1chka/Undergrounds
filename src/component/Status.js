import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import axios from 'axios';

const Status = () => {
  const chillMessage = "Вдалого дня!";
  const alarmMessage = "Увага! Повітряна тривога. Зберігайте спокій та пройдіть в укриття!";

  const [statusData, setStatusData] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const response = axios.get('https://my-json-server.typicode.com/electr1chka/fake-api/alarmstate');
    response.then((result) => {
      setStatusData(result.data);
    }).catch((err) => { });
  };

  return (
    <View>
      <Image
        style={styles.headerImage}
        source={statusData.status ? require("../../assets/alarm_icon.png") : require("../../assets/chill_icon.png")}
      />
      <View>
        <Text style={styles.message}>{statusData.status ? alarmMessage : chillMessage}</Text>
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
