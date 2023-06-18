import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { instance } from '../service/api';
// Pre-defined image map


const images = {
  1: require('../../assets/map_1.jpg'),
  2: require('../../assets/map_2.jpg'),
  3: require('../../assets/map_3.jpg'),
  4: require('../../assets/map_4.jpg'),
};

const ShelterMap = () => {
  const [statusData, setStatusData] = useState(false);
  const [shelter, setShelterId] = useState({});

  useEffect(() => {
    fetchAlarmData();
    fetchGroupData();
  }, []);

  const fetchAlarmData = async () => {
    try {
      const response = await instance.get(`/fake_api/alarmstate`);
      console.log(response);
      setStatusData(response.data[0]);
    } catch (err) {
      console.error("125125", err.payload);
    }
  };

  const fetchGroupData = async () => {
    try {
      const value = await AsyncStorage.getItem('@group');
      if (value !== null) {
        const group = JSON.parse(value);
        fetchShelterData(group.key);
      }
    } catch (e) {
      console.error(e);
    }
  }

  const fetchShelterData = async (groupKey) => {
    try {     
      const response = await instance.get(`/fake_api/groups/${groupKey}`);
      setShelterId(response.data);
    } catch (e) {
      console.error(e);
    }
  }
  return (
      <View style={styles.container}>
        <Image
            style={styles.mapPicture}
            source={statusData.status ?  images[shelter.underground] : require("../../assets/map.jpg")}
            //source={images[shelter.underground]}
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