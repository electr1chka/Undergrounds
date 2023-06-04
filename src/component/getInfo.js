import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import axios from 'axios';

const Groups = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const response = axios.get('https://my-json-server.typicode.com/electr1chka/fake-api/groups');
    response.then((result) => {
      setData(result.data);
    }).catch((err) => { });
  };

  return (
    <SelectDropdown
      data={data}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index)
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        // text represented after item is selected
        // if data array is an array of objects then return selectedItem.property to render after item is selected
        return selectedItem
      }}
      rowTextForSelection={(item, index) => {
        // text represented for each item in dropdown
        // if data array is an array of objects then return item.property to represent item in dropdown <Text style={styles.mainHeader}>Welcome to</Text>
        return item
      }}
    />
  );
}

const Status = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const response = axios.get('https://my-json-server.typicode.com/electr1chka/fake-api/alarmstate');
    response.then((result) => {
      setData(result.data);
    }).catch((err) => { });
  };

  return (
    <Image
      style={styles.headerImage}
      resizeMode="contain"
      source={data.status ? require("../../assets/alarm_icon.png") : require("../../assets/chill_icon.png")}
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
