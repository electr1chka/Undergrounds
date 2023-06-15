import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShelterMap = () => {
  const [statusData, setStatusData] = useState(false);
  const [shelter, setShelterId] = useState({});
  const [group, setGroup] = useState({});

  useEffect(() => {
    (async () => {
      await fetchAlarmData();
      await fetchGroupData();
      await fetchShelterData();
    }
    )();
  }, []);

  const fetchAlarmData = () => {
    const response = axios.get('https://my-json-server.typicode.com/electr1chka/fake-api/alarmstate');
    response.then((result) => {
      setStatusData(result.data);
    }).catch((err) => { });
  };

  const fetchGroupData = async () => {
    try {
      const value = await AsyncStorage.getItem('@group');
      if (value !== null) {
        setGroup(JSON.parse(value));
      }
    } catch (e) {
      console.log(e)
    }
  }

  const fetchShelterData = async () => {
    try {
      console.log("1234", group);
      await axios.get(`https://my-json-server.typicode.com/electr1chka/fake-api/groups/${group.key}`)
        .then((result) => {
          setShelterId(result.data);
          console.log("1111", result.data);
        })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.mapPicture}
        source={statusData.status && shelter.id ? require("../../assets/map.jpg") : require(`../../assets/map_${shelter.underground}.jpg`)} //
      />
    </View>
  );
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

export default ShelterMap;