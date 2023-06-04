import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { SelectList } from 'react-native-dropdown-select-list'

const Status = () => {
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
    <Image
      style={styles.headerImage}
      resizeMode="contain"
      source={statusData.status ? require("../../assets/alarm_icon.png") : require("../../assets/chill_icon.png")}
    />
  );
};

const styles = StyleSheet.create({
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },
});


export default Status;
