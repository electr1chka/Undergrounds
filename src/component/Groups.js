import React, { useEffect, useState } from 'react';
import { Image, StyleSheet  } from 'react-native';
import axios from 'axios';
import { SelectList } from 'react-native-dropdown-select-list'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Groups = () => {

  const [groupsData, setGroupsData] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("name");

  useEffect(() => {
    fetchData();
    readSelectedGroup();
  }, []);

  useEffect(() => {
    storeSelectedGroup();
  }, [selectedGroup])

  const fetchData = async() => {
    await axios.get('https://my-json-server.typicode.com/electr1chka/fake-api/groups')
    .then((response) => {
      let newArray = response.data.map((item) => {
        return {key: item.id, value: item.name}
      })
      setGroupsData(newArray);
    }).catch((err) => { });
  };

  const storeSelectedGroup = async() => {
    try {
        const jsonValue = JSON.stringify(selectedGroup)
        await AsyncStorage.setItem('@group', jsonValue)
        const data1 = await AsyncStorage.setItem('@group', jsonValue)
        console.log(jsonValue)
      } catch (e) {
        console.log(e);
      }
  }

  const readSelectedGroup = async() => {
    try {
      const jsonValue = AsyncStorage.getItem('@group')
      await setSelectedGroup(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch(e) {
      // error reading value
    }
  }

  return(
    <SelectList 
        setSelected={setSelectedGroup} 
        data={groupsData} 
    />
  )
}

export default Groups;
