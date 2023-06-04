import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SelectList } from 'react-native-dropdown-select-list'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Groups = () => {

  const [groupsData, setGroupsData] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  useEffect(() => {
    (async () => {
      await fetchFromStorage();
      await fetchData();
    }
    )();
  }, []);
  const fetchFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem('@group')
      if(value !== null) {
        setSelectedGroup(JSON.parse(value));
      }
    } catch(e) {
      console.log(e)
    }
  }
  const fetchData = async() => {
    await axios.get('https://my-json-server.typicode.com/electr1chka/fake-api/groups')
    .then((response) => {
      let newArray = response.data.map((item) => {
        return {key: item.id, value: item.name}
      })
      setGroupsData(newArray);
    }).catch((err) => { });
  };


  return(
    <SelectList
        setSelected={setSelectedGroup}
        data={groupsData}
        onSelect={async ()=>{
          try{
            await AsyncStorage.setItem('@group', JSON.stringify(groupsData[selectedGroup-1].value));
          }
            catch(e){
                console.log(e)
            }
        }}
    />
  )
}

export default Groups;